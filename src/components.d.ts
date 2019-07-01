/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AiPopover {}
  interface AppCanvas {
    'addImageToCanvas': (imageString: string) => Promise<unknown>;
    'clearCanvas': () => Promise<void>;
    'clearGrid': () => Promise<unknown>;
    'color': string;
    'dragMode': boolean;
    'drawGrid': () => Promise<unknown>;
    'mode': string;
    'saveCanvas': (name: string) => Promise<void>;
    'savedDrawing': string | null;
  }
  interface AppControls {}
  interface AppHome {}
  interface AppImages {}
  interface AppProfile {
    'name': string;
  }
  interface AppRoot {}
  interface AppSettings {}
  interface ColorModal {}
  interface ImagePopover {}
  interface InstallModal {
    'installEvent': any;
  }
  interface PwaInstall {}
}

declare global {


  interface HTMLAiPopoverElement extends Components.AiPopover, HTMLStencilElement {}
  var HTMLAiPopoverElement: {
    prototype: HTMLAiPopoverElement;
    new (): HTMLAiPopoverElement;
  };

  interface HTMLAppCanvasElement extends Components.AppCanvas, HTMLStencilElement {}
  var HTMLAppCanvasElement: {
    prototype: HTMLAppCanvasElement;
    new (): HTMLAppCanvasElement;
  };

  interface HTMLAppControlsElement extends Components.AppControls, HTMLStencilElement {}
  var HTMLAppControlsElement: {
    prototype: HTMLAppControlsElement;
    new (): HTMLAppControlsElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppImagesElement extends Components.AppImages, HTMLStencilElement {}
  var HTMLAppImagesElement: {
    prototype: HTMLAppImagesElement;
    new (): HTMLAppImagesElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppSettingsElement extends Components.AppSettings, HTMLStencilElement {}
  var HTMLAppSettingsElement: {
    prototype: HTMLAppSettingsElement;
    new (): HTMLAppSettingsElement;
  };

  interface HTMLColorModalElement extends Components.ColorModal, HTMLStencilElement {}
  var HTMLColorModalElement: {
    prototype: HTMLColorModalElement;
    new (): HTMLColorModalElement;
  };

  interface HTMLImagePopoverElement extends Components.ImagePopover, HTMLStencilElement {}
  var HTMLImagePopoverElement: {
    prototype: HTMLImagePopoverElement;
    new (): HTMLImagePopoverElement;
  };

  interface HTMLInstallModalElement extends Components.InstallModal, HTMLStencilElement {}
  var HTMLInstallModalElement: {
    prototype: HTMLInstallModalElement;
    new (): HTMLInstallModalElement;
  };

  interface HTMLPwaInstallElement extends Components.PwaInstall, HTMLStencilElement {}
  var HTMLPwaInstallElement: {
    prototype: HTMLPwaInstallElement;
    new (): HTMLPwaInstallElement;
  };
  interface HTMLElementTagNameMap {
    'ai-popover': HTMLAiPopoverElement;
    'app-canvas': HTMLAppCanvasElement;
    'app-controls': HTMLAppControlsElement;
    'app-home': HTMLAppHomeElement;
    'app-images': HTMLAppImagesElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
    'app-settings': HTMLAppSettingsElement;
    'color-modal': HTMLColorModalElement;
    'image-popover': HTMLImagePopoverElement;
    'install-modal': HTMLInstallModalElement;
    'pwa-install': HTMLPwaInstallElement;
  }
}

declare namespace LocalJSX {
  interface AiPopover extends JSXBase.HTMLAttributes<HTMLAiPopoverElement> {}
  interface AppCanvas extends JSXBase.HTMLAttributes<HTMLAppCanvasElement> {
    'color'?: string;
    'dragMode'?: boolean;
    'mode'?: string;
    'savedDrawing'?: string | null;
  }
  interface AppControls extends JSXBase.HTMLAttributes<HTMLAppControlsElement> {
    'onAddImage'?: (event: CustomEvent<any>) => void;
    'onAllImages'?: (event: CustomEvent<any>) => void;
    'onClearCanvas'?: (event: CustomEvent<any>) => void;
    'onColorSelected'?: (event: CustomEvent<any>) => void;
    'onDoGrid'?: (event: CustomEvent<any>) => void;
    'onDragMode'?: (event: CustomEvent<any>) => void;
    'onEraserMode'?: (event: CustomEvent<any>) => void;
    'onPenMode'?: (event: CustomEvent<any>) => void;
    'onSaveCanvas'?: (event: CustomEvent<any>) => void;
  }
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {}
  interface AppImages extends JSXBase.HTMLAttributes<HTMLAppImagesElement> {}
  interface AppProfile extends JSXBase.HTMLAttributes<HTMLAppProfileElement> {
    'name'?: string;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface AppSettings extends JSXBase.HTMLAttributes<HTMLAppSettingsElement> {}
  interface ColorModal extends JSXBase.HTMLAttributes<HTMLColorModalElement> {}
  interface ImagePopover extends JSXBase.HTMLAttributes<HTMLImagePopoverElement> {}
  interface InstallModal extends JSXBase.HTMLAttributes<HTMLInstallModalElement> {
    'installEvent'?: any;
  }
  interface PwaInstall extends JSXBase.HTMLAttributes<HTMLPwaInstallElement> {}

  interface IntrinsicElements {
    'ai-popover': AiPopover;
    'app-canvas': AppCanvas;
    'app-controls': AppControls;
    'app-home': AppHome;
    'app-images': AppImages;
    'app-profile': AppProfile;
    'app-root': AppRoot;
    'app-settings': AppSettings;
    'color-modal': ColorModal;
    'image-popover': ImagePopover;
    'install-modal': InstallModal;
    'pwa-install': PwaInstall;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


