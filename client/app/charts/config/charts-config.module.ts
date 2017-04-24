import { NgModule, APP_INITIALIZER, ModuleWithProviders, Injectable } from '@angular/core';
import { MenuService } from 'app/core';

@Injectable()
export class ChartsConfig {
  constructor(private menuService : MenuService){
  }
  addMenu(){
    this.menuService.addMenuItem('sideNav',{
      state: 'charts',
      title: 'Charts',
      icon: 'fa-bar-chart',
      roles: ['*'],
    })
  }
}

export function chartsFactory(config: ChartsConfig) {
  return () => config.addMenu() ;
}
@NgModule({
  providers: [ ChartsConfig ]
})

export class ChartsConfigModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ChartsConfigModule,
      providers: [{ provide: APP_INITIALIZER, useFactory: chartsFactory, deps: [ChartsConfig], multi: true }]
    }
  }
}
