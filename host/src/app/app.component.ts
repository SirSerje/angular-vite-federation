
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
    console.log(this.appService.getHello());
  }

  public async ngOnInit(): Promise<void> {
    try {
      const module = await import('@namespace/viteViteRemote/');
      console.log(module)
      //const temp2 = module.default; // Adjust based on your export
      //console.log(temp2);
      // Utilize temp2 as needed within your component
    } catch (error) {
      console.error('Error loading temp2:', error);
    }
  }
}

