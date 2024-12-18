
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {
    console.log("///",this.appService.getHello());
  }
  renderReactApp(ReactApp: any) {
    // Render the React app inside a specific container (e.g., a div in your Angular template)
    const container = document.getElementById('react-container');
    console.log("container",container);
    
    if (container) {
      ReactApp(container); // Render React app to the container
    }
  }
  async loadRemoteReactApp() {
    console.log("loadRemoteReactApp");
    
    // Dynamically import the React component from the remote app
    await import('pokemon_list/App').then((module) => {
      console.log("mmm",module.renderApp);
      
      const ReactApp = module.renderApp; // Get the default export (React component)
      console.log("ReactApp",ReactApp);
      this.renderReactApp(ReactApp);
    }).catch(err => {
      console.error("Error loading remote React app", err);
    });
  }
  public  ngOnInit(): void {
    this.loadRemoteReactApp();
  }
}

