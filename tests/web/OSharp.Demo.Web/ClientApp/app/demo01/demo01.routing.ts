import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component, } from './demo01.component';

// TODO: import components
// import { DemoComponent } from './demo/demo.component';

const routes: Routes = [
    {
        path: '', component: Demo01Component,
        data: { title: '示例01' },
        children: [
            // TODO: add route
            // { path: 'demo', component: DemoComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Demo01RoutingModule { }
