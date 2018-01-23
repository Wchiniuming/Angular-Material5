import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const svgDir = 'assets/svg';
    const dayDir = `${svgDir}/days`;
    const avatarsDir = `${svgDir}/avatars`;
    const IconsDir = 'assets/img/icons';
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarsDir}/avatars.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/projects.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/week.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${svgDir}/sidebar/day.svg`));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(`${IconsDir}/add.svg`));
    ir.addSvgIcon('burger-navigation', ds.bypassSecurityTrustResourceUrl(`${IconsDir}/burger-navigation.svg`));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`${IconsDir}/delete.svg`));
    ir.addSvgIcon('hand-grab-o', ds.bypassSecurityTrustResourceUrl(`${IconsDir}/hand-grab-o.svg`));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${IconsDir}/move.svg`));
    ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarsDir}/unassigned.svg`));
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
        27, 28, 29, 30, 31,
    ];
    days.forEach( d => ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${d}.svg`)));
};
