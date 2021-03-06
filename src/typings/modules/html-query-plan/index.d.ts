// Generated by typings
// Source: node_modules/html-query-plan/dist/interfaces.d.ts
declare module '~html-query-plan/dist/interfaces' {
export interface IQpOptions {
    jsTooltips?: boolean;
}
export interface ICoordinate {
    x: number;
    y: number;
}
}
declare module 'html-query-plan/dist/interfaces' {
export * from '~html-query-plan/dist/interfaces';
}

// Generated by typings
// Source: node_modules/html-query-plan/dist/svgLines.d.ts
declare module '~html-query-plan/dist/svgLines' {
/**
 *
 * @param container
 */
export function drawSvgLines(container: HTMLElement): void;
}
declare module 'html-query-plan/dist/svgLines' {
export * from '~html-query-plan/dist/svgLines';
}

// Generated by typings
// Source: node_modules/html-query-plan/dist/index.d.ts
declare module '~html-query-plan/dist/index' {
import { IQpOptions } from '~html-query-plan/dist/interfaces';
export { drawSvgLines } from '~html-query-plan/dist/svgLines';
export * from '~html-query-plan/dist/interfaces';
/**
 *
 * @param container
 * @param planXml
 * @param options
 */
export function showPlan(container: HTMLElement, planXml: string, options: IQpOptions): void;
/**
 *
 * @param options
 * @param defaults
 */
export function setDefaults<T>(options: any, defaults: any): T;
}
declare module 'html-query-plan/dist/index' {
export * from '~html-query-plan/dist/index';
}
declare module 'html-query-plan' {
export * from '~html-query-plan/dist/index';
}
