
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import React from 'react';
import ReactDOM from 'react-dom/client';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private appService: AppService) {
    console.log("///", this.appService.getHello());
  }
  renderReactApp(ReactApp: any) {
    // Render the React app inside a specific container (e.g., a div in your Angular template)
    const container = document.getElementById('react-container');
    console.log("container", container);

    if (container) {
      ReactApp(container); // Render React app to the container
    }
  }
  async loadRemoteReactApp() {
    console.log("loadRemoteReactApp");

    // Dynamically import the React component from the remote app
    await import('pokemon_list/App').then((module) => {
      // console.log("mmm", module.renderApp);

      const ReactApp = module.renderApp; // Get the default export (React component)
      // console.log("ReactApp", ReactApp);
      this.renderReactApp(ReactApp);
    }).catch(err => {
      console.error("Error loading remote React app", err);
    });
   // Load PokemonCard
   const cardModule = await import('pokemon_list/PokemonCard');
   // console.log("cardModule", cardModule);
   const cardContainer = document.getElementById('pokemon-card-container');
   if (cardContainer && cardModule.PokemonCard) {

     const root = ReactDOM.createRoot(cardContainer);
     root.render(React.createElement(cardModule.PokemonCard));

   }
    try {
      //load single spa
      const singleSpaApp = await import('single_spa_shell/SingleSpaApp');
      console.log("cardModule", singleSpaApp);
      const singleSpaContainer = document.getElementById('single-spa-container');
    if (singleSpaContainer && singleSpaApp) {
      console.log("singleSpaApp", singleSpaApp);

      // const root = ReactDOM.createRoot(singleSpaApp.initSpa());
      // root.render(React.createElement(singleSpaApp.initSpa()));

    }
    } catch (error) {
      console.error("Error loading remote React app", error);
    }


  }

  public ngOnInit(): void {
    this.loadRemoteReactApp();
  }
}

