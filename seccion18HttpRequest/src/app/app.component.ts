import { Component } from '@angular/core';
import { ServerService } from './server.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName=this.serverService.getAppName();
  constructor(private serverService: ServerService) { }


  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  onSave() {
    //aqui se enbia el request
    this.serverService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

  onGet(){
    this.serverService.getServers().subscribe(
      (servers:any[]) => this.servers=servers,
      (error) => console.log(error)
    )
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }

}
