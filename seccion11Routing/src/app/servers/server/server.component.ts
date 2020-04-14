import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: { id: number, name: string, status: string };

  constructor(private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    //usando el resolver, data['server'] es el 'server' del app-routing.module
    this.route.data.subscribe(
      (data:Data) => {
        this.server = data['server'];
      }
    )
    // //+ para convertirlo en numero, porque lo toma como string
    // const id = +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // //para reaccionar a cualquer cambio se le agrega el codigo asincrono
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
    //   }
    // )
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: "preserve" });
  }

}
