declare module "*.svg" {
    const content: string;
    export default content;
}

declare module "*.module.css" {
    const styles: { [className: string]: string }
    export = styles
}