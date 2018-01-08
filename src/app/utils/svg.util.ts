import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const svgDir = 'assets/svg';
    const dayDir = `${svgDir}/days`;
    const avatarsDir = `${svgDir}/avatars`;
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarsDir}/avatars.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/projects.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/week.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/day.svg`));
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31,
    ];
    days.forEach( d => ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)));
};
