import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const svgDir = 'assets/svg';
    const dayDir = 'assets/svg/days';
    ir.addSvgIcon('home', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/home.svg`));
    ir.addSvgIcon('proj', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/proj.svg`));
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31,
    ];
    days.forEach( d => ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)));
};
