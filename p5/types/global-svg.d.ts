import { Framebuffer, RENDERER } from ".";

declare global {
  const SVG: "svg";

  function createCanvas(w: number, h: number, renderer: SVG): SVG;
  function createCanvas(w: number, h: number, renderer?: RENDERER): any;

  type SVGImage = {
    elt: SVGElement;
    attribute(name: string, value: any): void;
    query(selector: string): SVGImage[];
  };

  function loadSVG(path: string): SVGImage;

  function querySVG(selector: string): SVGImage[];

  function image(img: SVGImage, x: number, y: number): void;
  function image(img: unknown, x: number, y: number): void;
}

export {};
