import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Proizvod } from 'src/app/model/proizvod';
import { ProizvodService } from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-prikaz-proizvoda',
  templateUrl: './prikaz-proizvoda.component.html',
  styleUrls: ['./prikaz-proizvoda.component.css']
})
export class PrikazProizvodaComponent {

  constructor(private servis:ProizvodService) { }

  ngOnInit(): void {
    this.servis.ucitajProizvode().subscribe((podatak=>{
      console.log(podatak);
      this.dataSource.data = podatak;
    }))
  }

  dataSource = new MatTableDataSource<Proizvod>();
  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena','kategorija','datumKreiranja','slika'];


}
