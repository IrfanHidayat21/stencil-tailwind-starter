import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <header class=" bg-blue-800 shadow-md border-b-2 py-4 px-4">
        <div class=" bg-blue-800">
          <h3 class=" text-white text-lg leading-normal font-medium">Home</h3>
        </div>
      </header>,

      <ion-content class="ion-padding font-sans ">
        <h2 class="font-bold text-2xl text-center text-gray-800">Welcome to the PWA Prerender with TailwindCSS Toolkit</h2>
        <p class=" text-base text-center py-4">
          You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>
        <a class=" border-none" href="/profile/:name">
        <button class="bg-blue-800 rounded w-full py-2 px-3 text-white hover:bg-blue-700"> Profile page</button>
        </a>
      </ion-content>
    ];
  }
}
