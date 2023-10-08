import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Data1Service } from './data1.service';
import { LoggerService } from './logger.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  getResponse: any;
  postResponse: any;
  putResponse: any;
  deleteResponse: any;
  data$!: Observable<any>;

  constructor(private dataService: DataService,private dataService1: Data1Service, private loggerService: LoggerService) {}

  ngOnInit() {
    this.loggerService.log('Fetching data...');

    // Fetch data and assign to the data$ property
    this.data$ = this.dataService.fetchData();

    this.data$.subscribe((data) => {
      this.loggerService.log('Data received:'+ data);
    });

    // Example: Fetch data
    this.dataService.fetchData().subscribe((data) => {
      this.getResponse = data; // Set response data to a component property
      console.log('GET Request Successful:', data);
    });

    // Example: Create data
    const newData = { title: 'New Post', body: 'This is a new post' };
    this.dataService.createData(newData).subscribe((data) => {
      this.postResponse = data; // Set response data to a component property
      console.log('POST Request Successful:', data);
    });

    // Example: Update data
    const updatedData = { title: 'Updated Post', body: 'This post has been updated' };
    this.dataService.updateData(1, updatedData).subscribe((data) => {
      this.putResponse = data; // Set response data to a component property
      console.log('PUT Request Successful:', data);
    });
    this.dataService.deleteData(1).subscribe(() => {
      this.deleteResponse = 'DELETE Request Successful'; // Set response data to a component property
      console.log('DELETE Request Successful');
    });

   
  }
  fetchData():void {
    this.dataService.fetchData().subscribe((data) => {
      this.getResponse = data; // Set response data to a component property
      console.log('GET Request Successful:', data);
    });


}
createData():void{
  const newData = { title: 'New Post', body: 'This is a new post' };
    this.dataService.createData(newData).subscribe((data) => {
      this.postResponse = data; // Set response data to a component property
      console.log('POST Request Successful:', data);
    });

}
updateData():void{
  const updatedData = { title: 'Updated Post', body: 'This post has been updated' };
  this.dataService.updateData(1, updatedData).subscribe((data) => {
    this.putResponse = data; // Set response data to a component property
    console.log('PUT Request Successful:', data);
  });

}
deleteData():void{
  this.dataService.deleteData(1).subscribe(() => {
    this.deleteResponse = 'DELETE Request Successful'; // Set response data to a component property
    console.log('DELETE Request Successful');
  });
}


}
