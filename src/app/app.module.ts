import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module'
import { Route, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {ProductCatalogModule} from '../product-catalog/product-catalog.module';
import { ProductListingComponent} from '../product-catalog/product-listing/product-listing.component';

import { ProductUpdateComponent} from '../product-catalog/product-update/product-update.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(
      [
        {
          path: '',
          component: ProductListingComponent
        },
         {
          path: 'listing',
          component: ProductListingComponent
        }
          ,
         {
          path: 'update',
          component: ProductUpdateComponent
        }
        
        
      ],
      { initialNavigation: 'enabled' }
    ),
   ProductCatalogModule
     ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
