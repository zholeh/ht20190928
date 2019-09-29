import { NgModule } from '@angular/core';
import * as MATERIAL_MODULES from '@angular/material';

function mapMaterialModules() {
  return Object.keys(MATERIAL_MODULES)
    .filter(k => {
      const asset = (MATERIAL_MODULES as any)[k];
      return typeof asset === 'function' && asset.name.startsWith('Mat') && asset.name.includes('Module');
    })
    .map(k => (MATERIAL_MODULES as any)[k]);
}
const modules = mapMaterialModules();

@NgModule({
  imports: modules,
  exports: modules
})
export class AllMaterialModuleModule {}
