# src file dump

Root: `/Users/suhas/Desktop/angular/housemate/src/app`

---

## app.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/app.component.html`

```html
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->
<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->
<!-- * * * * * * * * * * and can be replaced.  * * * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * Delete the template below * * * * * * * * * -->
<!-- * * * * * * * to get started with your project! * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->

<style>
  :host {
    --bright-blue: oklch(51.01% 0.274 263.83);
    --electric-violet: oklch(53.18% 0.28 296.97);
    --french-violet: oklch(47.66% 0.246 305.88);
    --vivid-pink: oklch(69.02% 0.277 332.77);
    --hot-red: oklch(61.42% 0.238 15.34);
    --orange-red: oklch(63.32% 0.24 31.68);

    --gray-900: oklch(19.37% 0.006 300.98);
    --gray-700: oklch(36.98% 0.014 302.71);
    --gray-400: oklch(70.9% 0.015 304.04);

    --red-to-pink-to-purple-vertical-gradient: linear-gradient(
      180deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --red-to-pink-to-purple-horizontal-gradient: linear-gradient(
      90deg,
      var(--orange-red) 0%,
      var(--vivid-pink) 50%,
      var(--electric-violet) 100%
    );

    --pill-accent: var(--bright-blue);

    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    font-size: 3.125rem;
    color: var(--gray-900);
    font-weight: 500;
    line-height: 100%;
    letter-spacing: -0.125rem;
    margin: 0;
    font-family: "Inter Tight", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }

  p {
    margin: 0;
    color: var(--gray-700);
  }

  main {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    box-sizing: inherit;
    position: relative;
  }

  .angular-logo {
    max-width: 9.2rem;
  }

  .content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 700px;
    margin-bottom: 3rem;
  }

  .content h1 {
    margin-top: 1.75rem;
  }

  .content p {
    margin-top: 1.5rem;
  }

  .divider {
    width: 1px;
    background: var(--red-to-pink-to-purple-vertical-gradient);
    margin-inline: 0.5rem;
  }

  .pill-group {
    display: flex;
    flex-direction: column;
    align-items: start;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  .pill {
    display: flex;
    align-items: center;
    --pill-accent: var(--bright-blue);
    background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
    color: var(--pill-accent);
    padding-inline: 0.75rem;
    padding-block: 0.375rem;
    border-radius: 2.75rem;
    border: 0;
    transition: background 0.3s ease;
    font-family: var(--inter-font);
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.4rem;
    letter-spacing: -0.00875rem;
    text-decoration: none;
  }

  .pill:hover {
    background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
  }

  .pill-group .pill:nth-child(6n + 1) {
    --pill-accent: var(--bright-blue);
  }
  .pill-group .pill:nth-child(6n + 2) {
    --pill-accent: var(--french-violet);
  }
  .pill-group .pill:nth-child(6n + 3),
  .pill-group .pill:nth-child(6n + 4),
  .pill-group .pill:nth-child(6n + 5) {
    --pill-accent: var(--hot-red);
  }

  .pill-group svg {
    margin-inline-start: 0.25rem;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 0.73rem;
    margin-top: 1.5rem;
  }

  .social-links path {
    transition: fill 0.3s ease;
    fill: var(--gray-400);
  }

  .social-links a:hover svg path {
    fill: var(--gray-900);
  }

  @media screen and (max-width: 650px) {
    .content {
      flex-direction: column;
      width: max-content;
    }

    .divider {
      height: 1px;
      width: 100%;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
      margin-block: 1.5rem;
    }
  }
</style>

<main class="main">
  <div class="content">
    <div class="left-side">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 982 239"
        fill="none"
        class="angular-logo"
      >
        <g clip-path="url(#a)">
          <path
            fill="url(#b)"
            d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
          />
          <path
            fill="url(#c)"
            d="M388.676 191.625h30.849L363.31 31.828h-35.758l-56.215 159.797h30.848l13.174-39.356h60.061l13.256 39.356Zm-65.461-62.675 21.602-64.311h1.227l21.602 64.311h-44.431Zm126.831-7.527v70.202h-28.23V71.839h27.002v20.374h1.392c2.782-6.71 7.2-12.028 13.255-15.956 6.056-3.927 13.584-5.89 22.503-5.89 8.264 0 15.465 1.8 21.684 5.318 6.137 3.518 10.964 8.673 14.319 15.382 3.437 6.71 5.074 14.81 4.992 24.383v76.175h-28.23v-71.92c0-8.019-2.046-14.237-6.219-18.819-4.173-4.5-9.819-6.791-17.102-6.791-4.91 0-9.328 1.063-13.174 3.272-3.846 2.128-6.792 5.237-9.001 9.328-2.046 4.009-3.191 8.918-3.191 14.728ZM589.233 239c-10.147 0-18.82-1.391-26.103-4.091-7.282-2.7-13.092-6.382-17.511-10.964-4.418-4.582-7.528-9.655-9.164-15.219l25.448-6.136c1.145 2.372 2.782 4.663 4.991 6.954 2.209 2.291 5.155 4.255 8.837 5.81 3.683 1.554 8.428 2.291 14.074 2.291 8.019 0 14.647-1.964 19.884-5.81 5.237-3.845 7.856-10.227 7.856-19.064v-22.665h-1.391c-1.473 2.946-3.601 5.892-6.383 9.001-2.782 3.109-6.464 5.645-10.965 7.691-4.582 2.046-10.228 3.109-17.101 3.109-9.165 0-17.511-2.209-25.039-6.545-7.446-4.337-13.42-10.883-17.757-19.474-4.418-8.673-6.628-19.473-6.628-32.565 0-13.091 2.21-24.301 6.628-33.383 4.419-9.082 10.311-15.955 17.839-20.7 7.528-4.746 15.874-7.037 25.039-7.037 7.037 0 12.846 1.145 17.347 3.518 4.582 2.373 8.182 5.236 10.883 8.51 2.7 3.272 4.746 6.382 6.137 9.327h1.554v-19.8h27.821v121.749c0 10.228-2.454 18.737-7.364 25.447-4.91 6.709-11.538 11.7-20.048 15.055-8.509 3.355-18.165 4.991-28.884 4.991Zm.245-71.266c5.974 0 11.047-1.473 15.302-4.337 4.173-2.945 7.446-7.118 9.573-12.519 2.21-5.482 3.274-12.027 3.274-19.637 0-7.609-1.064-14.155-3.274-19.8-2.127-5.646-5.318-10.064-9.491-13.255-4.174-3.11-9.329-4.746-15.384-4.746s-11.537 1.636-15.792 4.91c-4.173 3.272-7.365 7.772-9.492 13.418-2.128 5.727-3.191 12.191-3.191 19.392 0 7.2 1.063 13.745 3.273 19.228 2.127 5.482 5.318 9.736 9.573 12.764 4.174 3.027 9.41 4.582 15.629 4.582Zm141.56-26.51V71.839h28.23v119.786h-27.412v-21.273h-1.227c-2.7 6.709-7.119 12.191-13.338 16.446-6.137 4.255-13.747 6.382-22.748 6.382-7.855 0-14.81-1.718-20.783-5.237-5.974-3.518-10.72-8.591-14.075-15.382-3.355-6.709-5.073-14.891-5.073-24.464V71.839h28.312v71.921c0 7.609 2.046 13.664 6.219 18.083 4.173 4.5 9.655 6.709 16.365 6.709 4.173 0 8.183-.982 12.111-3.028 3.927-2.045 7.118-5.072 9.655-9.082 2.537-4.091 3.764-9.164 3.764-15.218Zm65.707-109.395v159.796h-28.23V31.828h28.23Zm44.841 162.169c-7.61 0-14.402-1.391-20.457-4.091-6.055-2.7-10.883-6.791-14.32-12.109-3.518-5.319-5.237-11.946-5.237-19.801 0-6.791 1.228-12.355 3.765-16.773 2.536-4.419 5.891-7.937 10.228-10.637 4.337-2.618 9.164-4.664 14.647-6.055 5.4-1.391 11.046-2.373 16.856-3.027 7.037-.737 12.683-1.391 17.102-1.964 4.337-.573 7.528-1.555 9.574-2.782 1.963-1.309 3.027-3.273 3.027-5.973v-.491c0-5.891-1.718-10.391-5.237-13.664-3.518-3.191-8.51-4.828-15.056-4.828-6.955 0-12.356 1.473-16.447 4.5-4.009 3.028-6.71 6.546-8.183 10.719l-26.348-3.764c2.046-7.282 5.483-13.336 10.31-18.328 4.746-4.909 10.638-8.59 17.511-11.045 6.955-2.455 14.565-3.682 22.912-3.682 5.809 0 11.537.654 17.265 2.045s10.965 3.6 15.711 6.71c4.746 3.109 8.51 7.282 11.455 12.6 2.864 5.318 4.337 11.946 4.337 19.883v80.184h-27.166v-16.446h-.9c-1.719 3.355-4.092 6.464-7.201 9.328-3.109 2.864-6.955 5.237-11.619 6.955-4.828 1.718-10.229 2.536-16.529 2.536Zm7.364-20.701c5.646 0 10.556-1.145 14.729-3.354 4.173-2.291 7.364-5.237 9.655-9.001 2.292-3.763 3.355-7.854 3.355-12.273v-14.155c-.9.737-2.373 1.391-4.5 2.046-2.128.654-4.419 1.145-7.037 1.636-2.619.491-5.155.9-7.692 1.227-2.537.328-4.746.655-6.628.901-4.173.572-8.019 1.472-11.292 2.781-3.355 1.31-5.973 3.11-7.855 5.401-1.964 2.291-2.864 5.318-2.864 8.918 0 5.237 1.882 9.164 5.728 11.782 3.682 2.782 8.51 4.091 14.401 4.091Zm64.643 18.328V71.839h27.412v19.965h1.227c2.21-6.955 5.974-12.274 11.292-16.038 5.319-3.763 11.456-5.645 18.329-5.645 1.555 0 3.355.082 5.237.163 1.964.164 3.601.328 4.91.573v25.938c-1.227-.41-3.109-.819-5.646-1.146a58.814 58.814 0 0 0-7.446-.49c-5.155 0-9.738 1.145-13.829 3.354-4.091 2.209-7.282 5.236-9.655 9.164-2.373 3.927-3.519 8.427-3.519 13.5v70.448h-28.312ZM222.077 39.192l-8.019 125.923L137.387 0l84.69 39.192Zm-53.105 162.825-57.933 33.056-57.934-33.056 11.783-28.556h92.301l11.783 28.556ZM111.039 62.675l30.357 73.803H80.681l30.358-73.803ZM7.937 165.115 0 39.192 84.69 0 7.937 165.115Z"
          />
        </g>
        <defs>
          <radialGradient
            id="c"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="rotate(118.122 171.182 60.81) scale(205.794)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF41F8" />
            <stop offset=".707" stop-color="#FF41F8" stop-opacity=".5" />
            <stop offset="1" stop-color="#FF41F8" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="b"
            x1="0"
            x2="982"
            y1="192"
            y2="192"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F0060B" />
            <stop offset="0" stop-color="#F0070C" />
            <stop offset=".526" stop-color="#CC26D5" />
            <stop offset="1" stop-color="#7702FF" />
          </linearGradient>
          <clipPath id="a"><path fill="#fff" d="M0 0h982v239H0z" /></clipPath>
        </defs>
      </svg>
      <h1>Hello, {{ title }}</h1>
      <p>Congratulations! Your app is running. 🎉</p>
    </div>
    <div class="divider" role="separator" aria-label="Divider"></div>
    <div class="right-side">
      <div class="pill-group">
        @for (item of [
          { title: 'Explore the Docs', link: 'https://angular.dev' },
          { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
          { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
          { title: 'Angular Language Service', link: 'https://angular.dev/tools/language-service' },
          { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
        ]; track item.title) {
          <a
            class="pill"
            [href]="item.link"
            target="_blank"
            rel="noopener"
          >
            <span>{{ item.title }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14"
              viewBox="0 -960 960 960"
              width="14"
              fill="currentColor"
            >
              <path
                d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
              />
            </svg>
          </a>
        }
      </div>
      <div class="social-links">
        <a
          href="https://github.com/angular/angular"
          aria-label="Github"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Github"
          >
            <path
              d="M12.3047 0C5.50634 0 0 5.50942 0 12.3047C0 17.7423 3.52529 22.3535 8.41332 23.9787C9.02856 24.0946 9.25414 23.7142 9.25414 23.3871C9.25414 23.0949 9.24389 22.3207 9.23876 21.2953C5.81601 22.0377 5.09414 19.6444 5.09414 19.6444C4.53427 18.2243 3.72524 17.8449 3.72524 17.8449C2.61064 17.082 3.81137 17.0973 3.81137 17.0973C5.04697 17.1835 5.69604 18.3647 5.69604 18.3647C6.79321 20.2463 8.57636 19.7029 9.27978 19.3881C9.39052 18.5924 9.70736 18.0499 10.0591 17.7423C7.32641 17.4347 4.45429 16.3765 4.45429 11.6618C4.45429 10.3185 4.9311 9.22133 5.72065 8.36C5.58222 8.04931 5.16694 6.79833 5.82831 5.10337C5.82831 5.10337 6.85883 4.77319 9.2121 6.36459C10.1965 6.09082 11.2424 5.95546 12.2883 5.94931C13.3342 5.95546 14.3801 6.09082 15.3644 6.36459C17.7023 4.77319 18.7328 5.10337 18.7328 5.10337C19.3942 6.79833 18.9789 8.04931 18.8559 8.36C19.6403 9.22133 20.1171 10.3185 20.1171 11.6618C20.1171 16.3888 17.2409 17.4296 14.5031 17.7321C14.9338 18.1012 15.3337 18.8559 15.3337 20.0084C15.3337 21.6552 15.3183 22.978 15.3183 23.3779C15.3183 23.7009 15.5336 24.0854 16.1642 23.9623C21.0871 22.3484 24.6094 17.7341 24.6094 12.3047C24.6094 5.50942 19.0999 0 12.3047 0Z"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/angular"
          aria-label="Twitter"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Twitter"
          >
            <path
              d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            />
          </svg>
        </a>
        <a
          href="https://www.youtube.com/channel/UCbn1OgGei-DV7aSRo_HaAiw"
          aria-label="Youtube"
          target="_blank"
          rel="noopener"
        >
          <svg
            width="29"
            height="20"
            viewBox="0 0 29 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            alt="Youtube"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.4896 1.52422C27.9301 1.96749 28.2463 2.51866 28.4068 3.12258C29.0004 5.35161 29.0004 10 29.0004 10C29.0004 10 29.0004 14.6484 28.4068 16.8774C28.2463 17.4813 27.9301 18.0325 27.4896 18.4758C27.0492 18.9191 26.5 19.2389 25.8972 19.4032C23.6778 20 14.8068 20 14.8068 20C14.8068 20 5.93586 20 3.71651 19.4032C3.11363 19.2389 2.56449 18.9191 2.12405 18.4758C1.68361 18.0325 1.36732 17.4813 1.20683 16.8774C0.613281 14.6484 0.613281 10 0.613281 10C0.613281 10 0.613281 5.35161 1.20683 3.12258C1.36732 2.51866 1.68361 1.96749 2.12405 1.52422C2.56449 1.08095 3.11363 0.76113 3.71651 0.596774C5.93586 0 14.8068 0 14.8068 0C14.8068 0 23.6778 0 25.8972 0.596774C26.5 0.76113 27.0492 1.08095 27.4896 1.52422ZM19.3229 10L11.9036 5.77905V14.221L19.3229 10Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</main>

<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * * * The content above * * * * * * * * * * * * -->
<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * * -->
<!-- * * * * * * * * * * and can be replaced.  * * * * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->
<!-- * * * * * * * * * * End of Placeholder  * * * * * * * * * * * * -->
<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->


<router-outlet />
```

---

## app.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/app.component.scss`

```scss

```

---

## app.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/app.component.ts`

```ts
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastComponent } from './shared/components/toast/toast.component';
import { AuthActions } from './core/store/auth/auth.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  template: `
    <router-outlet />
    <app-toast />
  `,
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'HouseMate';
  private readonly store = inject(Store);
  private tokenCheckInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    // Restore session from localStorage on app startup
    this.store.dispatch(AuthActions.checkSession());

    // Periodically check token expiry every 60 seconds
    this.tokenCheckInterval = setInterval(() => {
      const token = localStorage.getItem('housemate_access_token');
      if (token) {
        try {
          const parts = token.split('.');
          if (parts.length === 3) {
            const payload = JSON.parse(atob(parts[1]));
            if (payload.exp <= Math.floor(Date.now() / 1000)) {
              // Token expired — force logout
              this.store.dispatch(AuthActions.logout());
            }
          }
        } catch {
          // Corrupted token — force logout
          this.store.dispatch(AuthActions.logout());
        }
      }
    }, 60000);
  }

  ngOnDestroy(): void {
    if (this.tokenCheckInterval) {
      clearInterval(this.tokenCheckInterval);
    }
  }
}
```

---

## app.config.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/app.config.ts`

```ts
import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { authReducer } from './core/store/auth/auth.reducer';
import { bookingReducer } from './core/store/booking/booking.reducer';
import { serviceReducer } from './core/store/service/service.reducer';
import { AuthEffects } from './core/store/auth/auth.effects';
import { BookingEffects } from './core/store/booking/booking.effects';
import { ServiceEffects } from './core/store/service/service.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
    
    // NgRx Store
    provideStore({
      auth: authReducer,
      bookings: bookingReducer,
      services: serviceReducer
    }),
    
    // NgRx Effects
    provideEffects([AuthEffects, BookingEffects, ServiceEffects]),
    
    // NgRx DevTools (only in development)
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true
    })
  ]
};
```

---

## app.routes.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/app.routes.ts`

```ts
import { Routes } from '@angular/router';
import { 
  authGuard, 
  customerGuard, 
  customerRoleGuard,
  expertGuard, 
  expertRoleGuard,
  guestGuard,
  authMatchGuard,
  customerMatchGuard,
  expertMatchGuard,
  guestMatchGuard,
  bookingFormGuard
} from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/landing.component').then(m => m.LandingComponent),
    title: 'HouseMate - Trusted Home Services'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
    title: 'Login - HouseMate',
    canMatch: [guestMatchGuard],
    canActivate: [guestGuard]
  },
  {
    path: 'register/customer',
    loadComponent: () => import('./features/auth/register-customer/register-customer.component').then(m => m.RegisterCustomerComponent),
    title: 'Customer Registration - HouseMate',
    canMatch: [guestMatchGuard],
    canActivate: [guestGuard]
  },
  {
    path: 'register/expert',
    loadComponent: () => import('./features/auth/register-expert/register-expert.component').then(m => m.RegisterExpertComponent),
    title: 'Expert Registration - HouseMate',
    canMatch: [guestMatchGuard],
    canActivate: [guestGuard]
  },
  // Customer Routes
  {
    path: 'customer',
    canMatch: [customerMatchGuard],
    canActivate: [authGuard, customerGuard, customerRoleGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/customer/dashboard/customer-dashboard.component').then(m => m.CustomerDashboardComponent),
        title: 'Dashboard - HouseMate'
      },
      {
        path: 'book-service',
        loadComponent: () => import('./features/customer/book-service/book-service.component').then(m => m.BookServiceComponent),
        title: 'Book a Service - HouseMate',
        canDeactivate: [bookingFormGuard]
      },
      {
        path: 'bookings',
        loadComponent: () => import('./features/customer/my-bookings/my-bookings.component').then(m => m.MyBookingsComponent),
        title: 'My Bookings - HouseMate'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  // Expert Routes
  {
    path: 'expert',
    canMatch: [expertMatchGuard],
    canActivate: [authGuard, expertGuard, expertRoleGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/expert/dashboard/expert-dashboard.component').then(m => m.ExpertDashboardComponent),
        title: 'Expert Dashboard - HouseMate'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

---

## core/guards/auth.guard.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/guards/auth.guard.ts`

```ts
import { inject } from '@angular/core';
import { 
  Router, 
  CanActivateFn, 
  CanMatchFn,
  CanDeactivateFn,
  ActivatedRouteSnapshot, 
  RouterStateSnapshot,
  Route,
  UrlSegment
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take, filter, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { selectIsAuthenticated, selectIsCustomer, selectIsExpert, selectUser, selectAuthState } from '../store/auth/auth.selectors';
import { UserRole } from '../models/user.model';
import { NotificationService } from '../services/notification.service';
import { AuthActions } from '../store/auth/auth.actions';

/**
 * Interface for components that need unsaved changes confirmation
 */
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

/**
 * Helper: waits for auth state to finish loading, then returns isAuthenticated.
 * This ensures checkSession() from AppComponent has resolved before guarding.
 */
function waitForAuth(store: Store): Observable<boolean> {
  return store.select(selectAuthState).pipe(
    filter(state => !state.isLoading),
    take(1),
    map(state => state.isAuthenticated)
  );
}

// ============================================
// canActivate Guards
// ============================================

/**
 * Auth Guard - Protects routes that require authentication
 * Uses NgRx store for state management
 */
export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return waitForAuth(store).pipe(
    map(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      }

      notification.warning('Authentication Required', 'Please log in to access this page.');
      router.navigate(['/login'], {
        queryParams: { returnUrl: state.url }
      });
      return false;
    })
  );
};

/**
 * Customer Guard - Only allows customers to access protected routes
 */
export const customerGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return waitForAuth(store).pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        notification.warning('Authentication Required', 'Please log in as a customer to access this page.');
        router.navigate(['/login'], {
          queryParams: { returnUrl: state.url, role: 'customer' }
        });
        return false;
      }

      return true;
    })
  );
};

/**
 * Customer Role Guard - Verifies user has customer role
 */
export const customerRoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return waitForAuth(store).pipe(
    switchMap(() => store.select(selectIsCustomer).pipe(take(1))),
    map(isCustomer => {
      if (isCustomer) {
        return true;
      }

      notification.error('Access Denied', 'This page is only available for customers.');
      router.navigate(['/expert/dashboard']);
      return false;
    })
  );
};

/**
 * Expert Guard - Only allows experts to access protected routes
 */
export const expertGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return waitForAuth(store).pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        notification.warning('Authentication Required', 'Please log in as an expert to access this page.');
        router.navigate(['/login'], {
          queryParams: { returnUrl: state.url, role: 'expert' }
        });
        return false;
      }

      return true;
    })
  );
};

/**
 * Expert Role Guard - Verifies user has expert role
 */
export const expertRoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);
  const notification = inject(NotificationService);

  return waitForAuth(store).pipe(
    switchMap(() => store.select(selectIsExpert).pipe(take(1))),
    map(isExpert => {
      if (isExpert) {
        return true;
      }

      notification.error('Access Denied', 'This page is only available for experts.');
      router.navigate(['/customer/dashboard']);
      return false;
    })
  );
};

/**
 * Guest Guard - Only allows non-authenticated users (for login/register pages)
 */
export const guestGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> => {
  const store = inject(Store);
  const router = inject(Router);

  return waitForAuth(store).pipe(
    switchMap(() => store.select(selectUser).pipe(take(1))),
    map(user => {
      if (!user) {
        return true;
      }

      // If already logged in, redirect to appropriate dashboard
      if (user.role === UserRole.CUSTOMER) {
        router.navigate(['/customer/dashboard']);
      } else if (user.role === UserRole.EXPERT) {
        router.navigate(['/expert/dashboard']);
      } else {
        router.navigate(['/']);
      }
      
      return false;
    })
  );
};

// ============================================
// canMatch Guards (Route-level protection)
// ============================================

/**
 * Auth Match Guard - Prevents route from being matched if not authenticated
 */
export const authMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return waitForAuth(store).pipe(
    switchMap(() => store.select(selectIsAuthenticated).pipe(take(1)))
  );
};

/**
 * Customer Match Guard - Prevents route from being matched if not a customer
 */
export const customerMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return waitForAuth(store).pipe(
    switchMap(() => store.select(selectIsCustomer).pipe(take(1)))
  );
};

/**
 * Expert Match Guard - Prevents route from being matched if not an expert
 */
export const expertMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return waitForAuth(store).pipe(
    switchMap(() => store.select(selectIsExpert).pipe(take(1)))
  );
};

/**
 * Guest Match Guard - Prevents route from being matched if authenticated
 */
export const guestMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
): Observable<boolean> => {
  const store = inject(Store);

  return waitForAuth(store).pipe(
    switchMap(() => store.select(selectIsAuthenticated).pipe(take(1))),
    map(isAuthenticated => !isAuthenticated)
  );
};

// ============================================
// canDeactivate Guards
// ============================================

/**
 * Unsaved Changes Guard - Prompts user before leaving if there are unsaved changes
 */
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  if (component.canDeactivate) {
    return component.canDeactivate();
  }
  return true;
};

/**
 * Booking Form Guard - Confirms exit from booking flow
 */
export const bookingFormGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {
  const notification = inject(NotificationService);
  
  // Allow navigation to payment confirmation
  if (nextState.url.includes('booking-confirmation') || nextState.url.includes('my-bookings')) {
    return true;
  }

  if (component.canDeactivate) {
    return component.canDeactivate();
  }

  // Default confirmation for booking form
  return window.confirm('You have unsaved changes in your booking. Are you sure you want to leave?');
};
```

---

## core/interceptors/auth.interceptor.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/interceptors/auth.interceptor.ts`

```ts
import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Get the auth token
  const token = authService.getToken();

  // Clone the request and add authorization header if token exists
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Token expired or invalid
        authService.logout();
        router.navigate(['/login'], {
          queryParams: { sessionExpired: true }
        });
      }
      return throwError(() => error);
    })
  );
};
```

---

## core/models/booking.model.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/models/booking.model.ts`

```ts
import { Address } from './user.model';

// Booking Status Enum
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Schedule Type Enum
export enum ScheduleType {
  ASAP = 'ASAP',
  SCHEDULED = 'SCHEDULED'
}

// OTP Type Enum
export enum OTPType {
  JOB_START = 'JOB_START',
  JOB_END = 'JOB_END'
}

// Booking Interface
export interface Booking {
  id: string;
  customerId: string;
  expertId: string;
  serviceId: string;
  status: BookingStatus;
  scheduleType: ScheduleType;
  startDate: string; // ISO date string
  timeSlot: {
    start: string; // HH:mm format
    end: string;
  };
  duration: number; // minutes
  address: Address;
  price: BookingPrice;
  payment: PaymentInfo;
  otp?: string;
  startOtp?: string;
  endOtp?: string;
  rating?: number;
  feedback?: string;
  cancellationReason?: string;
  createdAt: string;
  updatedAt: string;
  // Populated fields
  customerName?: string;
  expertName?: string;
  serviceName?: string;
}

// Booking Price Breakdown
export interface BookingPrice {
  base: number;
  addons?: number;
  discount?: number;
  gst: number;
  total: number;
}

// Payment Info
export interface PaymentInfo {
  status: PaymentStatus;
  method?: PaymentMethod;
  transactionId?: string;
  paidAt?: string;
}

// Payment Status Enum
export enum PaymentStatus {
  PENDING = 'PENDING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED'
}

// Payment Method Enum
export enum PaymentMethod {
  CARD = 'CARD',
  UPI = 'UPI',
  NET_BANKING = 'NET_BANKING'
}

// Booking Filters
export interface BookingFilters {
  status?: BookingStatus[];
  dateFrom?: string;
  dateTo?: string;
  serviceId?: string;
  sortBy?: 'date' | 'status' | 'price';
  sortOrder?: 'asc' | 'desc';
}

// Create Booking DTO
export interface CreateBookingDTO {
  serviceId: string;
  expertId: string;
  scheduleType: ScheduleType;
  startDate: string;
  timeSlot: {
    start: string;
    end: string;
  };
  addressId: string;
  couponCode?: string;
  addons?: string[];
}

// OTP Verification
export interface OTPVerification {
  bookingId: string;
  otp: string;
  type: OTPType;
  expiresAt: string;
  verified: boolean;
}

// Coupon Interface
export interface Coupon {
  code: string;
  description: string;
  discountPercentage: number;
  minOrderValue: number;
  maxDiscount: number;
  validUntil: string;
}

// Coupon Validation Response
export interface CouponValidation {
  valid: boolean;
  discount?: number;
  message?: string;
}
```

---

## core/models/index.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/models/index.ts`

```ts
// Barrel export for all models
export * from './user.model';
export * from './service.model';
export * from './booking.model';
export * from './payment.model';
```

---

## core/models/payment.model.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/models/payment.model.ts`

```ts
import { PaymentMethod, PaymentStatus } from './booking.model';

// Payment Interface
export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  status: PaymentStatus;
  method: PaymentMethod;
  transactionId: string;
  createdAt: string;
  updatedAt?: string;
}

// Payment DTO
export interface PaymentDTO {
  bookingId: string;
  amount: number;
  method: PaymentMethod;
  cardDetails?: CardDetails;
  upiId?: string;
  bankCode?: string;
}

// Card Details
export interface CardDetails {
  cardNumber: string;
  cardholderName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

// Bank for Net Banking
export interface Bank {
  code: string;
  name: string;
  logo?: string;
}

// Payment Receipt
export interface PaymentReceipt {
  transactionId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  paidAt: string;
  bookingId: string;
}
```

---

## core/models/service.model.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/models/service.model.ts`

```ts
// Service Category Enum
export enum ServiceCategory {
  CLEANING = 'CLEANING',
  COOKING = 'COOKING',
  GARDENING = 'GARDENING',
  PLUMBING = 'PLUMBING',
  ELECTRICAL = 'ELECTRICAL',
  PAINTING = 'PAINTING',
  CARPENTRY = 'CARPENTRY',
  PEST_CONTROL = 'PEST_CONTROL'
}

// Service Interface
export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  basePrice: number;
  duration: number; // minutes
  icon?: string;
  addons?: ServiceAddon[];
}

// Service Addon
export interface ServiceAddon {
  id: string;
  name: string;
  price: number;
  duration?: number; // additional minutes
}

// Search Filters
export interface SearchFilters {
  query?: string;
  category?: ServiceCategory;
  minPrice?: number;
  maxPrice?: number;
  location?: {
    city: string;
    area?: string;
  };
}

// Expert Filters
export interface ExpertFilters {
  serviceId?: string;
  category?: ServiceCategory;
  city: string;
  area?: string;
  minRating?: number;
  maxPrice?: number;
  isOnline?: boolean;
  language?: string;
}
```

---

## core/models/user.model.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/models/user.model.ts`

```ts
// User Role Enum
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  EXPERT = 'EXPERT'
}

// Base User Interface
export interface User {
  id: string;
  email: string;
  phone: string;
  name: string;
  age: number;
  role: UserRole;
  location: Location;
  createdAt: string;
  updatedAt?: string;
}

// Customer Interface
export interface Customer extends User {
  role: UserRole.CUSTOMER;
  addresses: Address[];
  bookingsCount?: number;
}

// Expert Interface
export interface Expert extends User {
  role: UserRole.EXPERT;
  skills: string[];
  experience: number; // years
  rating: number;
  totalRatings: number;
  languages: string[];
  certificates?: string[];
  hourlyRate: number;
  availability: AvailabilitySchedule;
  isOnline: boolean;
  isVerified: boolean;
  idProof: IdProof;
  photo?: string;
  bio?: string;
  distanceFromCustomer?: number; // calculated field in km
}

// Location Interface
export interface Location {
  city: string;
  area: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Address Interface
export interface Address {
  id: string;
  userId: string;
  label: AddressLabel;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
}

export enum AddressLabel {
  HOME = 'HOME',
  WORK = 'WORK',
  OTHER = 'OTHER'
}

// ID Proof Interface
export interface IdProof {
  type: IdProofType;
  number: string;
  documentUrl?: string;
}

export enum IdProofType {
  AADHAAR = 'AADHAAR',
  PAN = 'PAN',
  DRIVING_LICENSE = 'DRIVING_LICENSE',
  VOTER_ID = 'VOTER_ID'
}

// Availability Schedule
export interface AvailabilitySchedule {
  monday: TimeSlot[];
  tuesday: TimeSlot[];
  wednesday: TimeSlot[];
  thursday: TimeSlot[];
  friday: TimeSlot[];
  saturday: TimeSlot[];
  sunday: TimeSlot[];
}

export interface TimeSlot {
  start: string; // HH:mm format
  end: string;   // HH:mm format
}

// Auth DTOs
export interface LoginDTO {
  email: string;
  password: string;
  role: UserRole;
}

export interface RegisterCustomerDTO {
  email: string;
  password: string;
  name: string;
  phone: string;
  age: number;
  location: Location;
}

export interface RegisterExpertDTO extends RegisterCustomerDTO {
  skills: string[];
  experience: number;
  languages: string[];
  hourlyRate: number;
  idProof: IdProof;
  bio?: string;
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}
```

---

## core/services/auth.service.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/services/auth.service.ts`

```ts
import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap, map, catchError, throwError, of } from 'rxjs';
import { User, UserRole, Customer, Expert } from '../models/user.model';

// Auth Response Interface
export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone: string;
  role: UserRole;
}

// JWT Payload Interface
interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = 'http://localhost:3000';
  private readonly TOKEN_KEY = 'housemate_access_token';
  private readonly USER_KEY = 'housemate_user';

  // Signals for reactive state
  private currentUserSignal = signal<User | null>(null);
  private isLoadingSignal = signal<boolean>(false);

  // Computed signals
  readonly currentUser = this.currentUserSignal.asReadonly();
  readonly isAuthenticated = computed(() => !!this.currentUserSignal());
  readonly isCustomer = computed(() => this.currentUserSignal()?.role === UserRole.CUSTOMER);
  readonly isExpert = computed(() => this.currentUserSignal()?.role === UserRole.EXPERT);
  readonly isLoading = this.isLoadingSignal.asReadonly();

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadUserFromStorage();
  }

  // Load user from localStorage on app init
  private loadUserFromStorage(): void {
    const token = this.getToken();
    const userJson = localStorage.getItem(this.USER_KEY);
    
    if (token && userJson) {
      try {
        const user = JSON.parse(userJson) as User;
        if (this.isTokenValid(token)) {
          this.currentUserSignal.set(user);
        } else {
          this.clearStorage();
        }
      } catch {
        this.clearStorage();
      }
    }
  }

  // Generate a simple JWT-like token (in real app, this comes from backend)
  private generateToken(user: User): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      sub: user.id,
      email: user.email,
      role: user.role,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    }));
    const signature = btoa('mock-signature');
    return `${header}.${payload}.${signature}`;
  }

  // Decode JWT token
  private decodeToken(token: string): JwtPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      return JSON.parse(atob(parts[1])) as JwtPayload;
    } catch {
      return null;
    }
  }

  // Check if token is valid
  private isTokenValid(token: string): boolean {
    const payload = this.decodeToken(token);
    if (!payload) return false;
    return payload.exp > Math.floor(Date.now() / 1000);
  }

  // Login
  login(credentials: LoginCredentials): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);
    
    // Using json-server, we need to find user by email
    return this.http.get<User[]>(`${this.API_URL}/users`, {
      params: { email: credentials.email }
    }).pipe(
      map(users => {
        if (users.length === 0) {
          throw new Error('User not found');
        }
        
        const user = users[0];
        // In real app, password would be verified on backend
        // For demo, we accept any password
        
        const accessToken = this.generateToken(user);
        
        // Store token and user
        localStorage.setItem(this.TOKEN_KEY, accessToken);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSignal.set(user);
        
        return { accessToken, user };
      }),
      tap(() => this.isLoadingSignal.set(false)),
      catchError(error => {
        this.isLoadingSignal.set(false);
        return throwError(() => new Error(error.message || 'Login failed'));
      })
    );
  }

  // Register Customer
  registerCustomer(data: Omit<RegisterData, 'role'> & { addresses?: any[] }): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);
    
    const newUser: Partial<Customer> = {
      id: `cust-${Date.now()}`,
      email: data.email,
      name: data.name,
      phone: data.phone,
      role: UserRole.CUSTOMER,
      age: 0,
      location: { city: '', area: '' },
      addresses: data.addresses || [],
      createdAt: new Date().toISOString()
    };

    return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
      map(user => {
        const accessToken = this.generateToken(user);
        localStorage.setItem(this.TOKEN_KEY, accessToken);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSignal.set(user);
        return { accessToken, user };
      }),
      tap(() => this.isLoadingSignal.set(false)),
      catchError(error => {
        this.isLoadingSignal.set(false);
        return throwError(() => new Error('Registration failed'));
      })
    );
  }

  // Register Expert
  registerExpert(data: any): Observable<AuthResponse> {
    this.isLoadingSignal.set(true);
    
    const newUser: Partial<Expert> = {
      id: `exp-${Date.now()}`,
      email: data.email,
      name: data.fullName,
      phone: data.mobileNumber,
      role: UserRole.EXPERT,
      age: 0,
      location: { city: data.city, area: data.address },
      skills: data.services || [],
      experience: parseInt(data.experienceYears) || 0,
      rating: 0,
      totalRatings: 0,
      languages: data.languages || [],
      hourlyRate: parseInt(data.hourlyRate) || 0,
      isOnline: false,
      isVerified: false,
      idProof: {
        type: data.idType,
        number: data.idNumber
      },
      createdAt: new Date().toISOString()
    };

    return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
      map(user => {
        const accessToken = this.generateToken(user);
        localStorage.setItem(this.TOKEN_KEY, accessToken);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSignal.set(user);
        return { accessToken, user };
      }),
      tap(() => this.isLoadingSignal.set(false)),
      catchError(error => {
        this.isLoadingSignal.set(false);
        return throwError(() => new Error('Registration failed'));
      })
    );
  }

  // Logout
  logout(): void {
    this.clearStorage();
    this.currentUserSignal.set(null);
    this.router.navigate(['/login']);
  }

  // Get current token
  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.currentUserSignal();
  }

  // Clear storage
  private clearStorage(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  // Check authentication status
  checkAuth(): Observable<boolean> {
    const token = this.getToken();
    if (!token || !this.isTokenValid(token)) {
      this.clearStorage();
      this.currentUserSignal.set(null);
      return of(false);
    }
    return of(true);
  }

  // Update user profile
  updateProfile(userData: Partial<User>): Observable<User> {
    const currentUser = this.currentUserSignal();
    if (!currentUser) {
      return throwError(() => new Error('Not authenticated'));
    }

    return this.http.patch<User>(`${this.API_URL}/users/${currentUser.id}`, userData).pipe(
      tap(updatedUser => {
        localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
        this.currentUserSignal.set(updatedUser);
      })
    );
  }
}
```

---

## core/services/booking.service.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/services/booking.service.ts`

```ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, of } from 'rxjs';
import { AuthService } from './auth.service';

// Booking Status Enum
export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Payment Status Enum
export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED'
}

// Booking Interface
export interface Booking {
  id: string;
  customerId: string;
  expertId: string;
  serviceId: string;
  serviceName: string;
  addressId: string;
  date: string;
  timeSlot: string;
  duration: number; // in hours
  frequency: 'once' | 'weekly' | 'monthly';
  status: BookingStatus;
  baseAmount: number;
  gstAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  couponCode?: string;
  notes?: string;
  otp?: string; // OTP for expert verification
  createdAt: string;
  updatedAt?: string;
  // Populated fields
  expert?: any;
  customer?: any;
  address?: any;
  service?: any;
}

// Service Interface
export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  basePrice: number;
  priceUnit: string;
  isPopular: boolean;
  isFeatured: boolean;
  discount?: number;
}

// Expert for listing
export interface ExpertListing {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  totalRatings: number;
  experience: number;
  hourlyRate: number;
  distance?: number;
  skills: string[];
  languages: string[];
  isVerified: boolean;
  isOnline: boolean;
}

// Address Interface
export interface Address {
  id: string;
  userId: string;
  label: string;
  houseType: string;
  locationType: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  contactName: string;
  contactNumber: string;
  alternateNumber?: string;
}

// Coupon Interface
export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'flat';
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
  validFrom: string;
  validTo: string;
  isActive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly API_URL = 'http://localhost:3000';
  
  // Signals for state
  private servicesSignal = signal<Service[]>([]);
  private expertsSignal = signal<ExpertListing[]>([]);
  
  readonly services = this.servicesSignal.asReadonly();
  readonly experts = this.expertsSignal.asReadonly();

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  // Get all services
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.API_URL}/services`).pipe(
      map(services => {
        this.servicesSignal.set(services);
        return services;
      })
    );
  }

  // Get popular services
  getPopularServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.API_URL}/services`, {
      params: { isPopular: 'true' }
    });
  }

  // Get featured services
  getFeaturedServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.API_URL}/services`, {
      params: { isFeatured: 'true' }
    });
  }

  // Get experts by service
  getExpertsByService(serviceId: string): Observable<ExpertListing[]> {
    return this.http.get<any[]>(`${this.API_URL}/users`, {
      params: { role: 'EXPERT' }
    }).pipe(
      map(experts => {
        // Filter experts who have this service skill
        const filtered = experts.filter(e => 
          e.skills && e.skills.some((s: string) => 
            s.toLowerCase().includes(serviceId.toLowerCase())
          )
        );
        return filtered.map(e => ({
          id: e.id,
          name: e.name,
          photo: e.photo,
          rating: e.rating || 4.5,
          totalRatings: e.totalRatings || 0,
          experience: e.experience || 0,
          hourlyRate: e.hourlyRate || 299,
          distance: Math.random() * 5 + 0.5, // Mock distance
          skills: e.skills || [],
          languages: e.languages || ['Hindi', 'English'],
          isVerified: e.isVerified || false,
          isOnline: e.isOnline || false
        }));
      })
    );
  }

  // Get all experts
  getAllExperts(): Observable<ExpertListing[]> {
    return this.http.get<any[]>(`${this.API_URL}/users`, {
      params: { role: 'EXPERT' }
    }).pipe(
      map(experts => experts.map(e => ({
        id: e.id,
        name: e.name,
        photo: e.photo,
        rating: e.rating || 4.5,
        totalRatings: e.totalRatings || 122,
        experience: e.experience || 5,
        hourlyRate: e.hourlyRate || 299,
        distance: Math.random() * 5 + 0.5,
        skills: e.skills || ['Cooking', 'Cleaning'],
        languages: e.languages || ['Hindi', 'English'],
        isVerified: e.isVerified ?? true,
        isOnline: e.isOnline || false
      })))
    );
  }

  // Get customer bookings
  getCustomerBookings(customerId: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
      params: { customerId }
    });
  }

  // Get upcoming bookings for customer (PENDING and CONFIRMED)
  getUpcomingBookings(customerId: string): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
      params: { customerId }
    }).pipe(
      map(bookings => {
        const today = new Date();
        // Filter for upcoming bookings (PENDING or CONFIRMED status, future date)
        return bookings
          .filter(b => {
            const bookingDate = new Date(b.date);
            const status = (b.status as string).toUpperCase();
            const isPendingOrConfirmed = status === 'PENDING' || status === 'CONFIRMED';
            return isPendingOrConfirmed && bookingDate >= today;
          })
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      })
    );
  }

  // Get customer addresses
  getCustomerAddresses(customerId: string): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.API_URL}/addresses`, {
      params: { userId: customerId }
    });
  }

  // Add new address
  addAddress(address: Omit<Address, 'id'>): Observable<Address> {
    const newAddress = {
      ...address,
      id: `addr-${Date.now()}`
    };
    return this.http.post<Address>(`${this.API_URL}/addresses`, newAddress);
  }

  // Get available coupons
  getAvailableCoupons(): Observable<Coupon[]> {
    return this.http.get<Coupon[]>(`${this.API_URL}/coupons`, {
      params: { isActive: 'true' }
    });
  }

  // Apply coupon
  applyCoupon(code: string, amount: number): Observable<{ discount: number; coupon: Coupon } | null> {
    return this.http.get<Coupon[]>(`${this.API_URL}/coupons`, {
      params: { code, isActive: 'true' }
    }).pipe(
      map(coupons => {
        if (coupons.length === 0) return null;
        
        const coupon = coupons[0];
        if (amount < coupon.minOrderValue) return null;
        
        let discount = 0;
        if (coupon.discountType === 'percentage') {
          discount = (amount * coupon.discountValue) / 100;
          if (coupon.maxDiscount) {
            discount = Math.min(discount, coupon.maxDiscount);
          }
        } else {
          discount = coupon.discountValue;
        }
        
        return { discount, coupon };
      })
    );
  }

  // Create booking
  createBooking(bookingData: Partial<Booking>): Observable<Booking> {
    // Generate 6-digit OTP for expert verification
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    const booking: Partial<Booking> = {
      ...bookingData,
      id: `book-${Date.now()}`,
      otp,
      status: BookingStatus.PENDING,
      paymentStatus: PaymentStatus.PENDING,
      createdAt: new Date().toISOString()
    };
    
    return this.http.post<Booking>(`${this.API_URL}/bookings`, booking);
  }

  // Update booking status
  updateBookingStatus(bookingId: string, status: BookingStatus): Observable<Booking> {
    return this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
      status,
      updatedAt: new Date().toISOString()
    });
  }

  // Update payment status
  updatePaymentStatus(bookingId: string, paymentStatus: PaymentStatus): Observable<Booking> {
    return this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
      paymentStatus,
      status: paymentStatus === PaymentStatus.PAID ? BookingStatus.CONFIRMED : undefined,
      updatedAt: new Date().toISOString()
    });
  }

  // Get booking by ID
  getBookingById(bookingId: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.API_URL}/bookings/${bookingId}`);
  }

  // Update booking
  updateBooking(bookingId: string, bookingData: Partial<Booking>): Observable<Booking> {
    return this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
      ...bookingData,
      updatedAt: new Date().toISOString()
    });
  }

  // Get booking with populated data
  getBookingWithDetails(bookingId: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.API_URL}/bookings/${bookingId}`).pipe(
      map(booking => {
        // In a real app, you'd join these from the backend
        return booking;
      })
    );
  }

  // Get expert by ID
  getExpertById(expertId: string): Observable<ExpertListing | null> {
    return this.http.get<any>(`${this.API_URL}/users/${expertId}`).pipe(
      map(e => e ? {
        id: e.id,
        name: e.name,
        photo: e.photo,
        rating: e.rating || 4.7,
        totalRatings: e.totalRatings || 122,
        experience: e.experience || 8,
        hourlyRate: e.hourlyRate || 299,
        distance: 2.3,
        skills: e.skills || [],
        languages: e.languages || ['Hindi', 'English'],
        isVerified: e.isVerified ?? true,
        isOnline: e.isOnline || false
      } : null)
    );
  }

  // Get FAQs
  getFaqs(): Observable<{ id: string; question: string; answer: string }[]> {
    return this.http.get<{ id: string; question: string; answer: string }[]>(`${this.API_URL}/faqs`);
  }
}
```

---

## core/services/error-handler.service.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/services/error-handler.service.ts`

```ts
import { Injectable, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService, ERROR_MESSAGES } from './notification.service';

export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
  timestamp?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  private readonly notificationService = inject(NotificationService);

  /**
   * Handle HTTP errors and show appropriate notifications
   */
  handleHttpError(error: HttpErrorResponse, context?: string): ApiError {
    const apiError = this.parseError(error);
    
    // Show notification based on error type
    this.showErrorNotification(apiError, context);
    
    return apiError;
  }

  /**
   * Parse HTTP error into ApiError format
   */
  private parseError(error: HttpErrorResponse): ApiError {
    // Network error (no internet, server down, etc.)
    if (error.status === 0) {
      return {
        status: 0,
        message: ERROR_MESSAGES.NETWORK.CONNECTION_ERROR,
        timestamp: new Date().toISOString()
      };
    }

    // Timeout error
    if (error.status === 408 || error.name === 'TimeoutError') {
      return {
        status: 408,
        message: ERROR_MESSAGES.NETWORK.TIMEOUT,
        timestamp: new Date().toISOString()
      };
    }

    // Client errors (4xx)
    if (error.status >= 400 && error.status < 500) {
      return this.handleClientError(error);
    }

    // Server errors (5xx)
    if (error.status >= 500) {
      return {
        status: error.status,
        message: ERROR_MESSAGES.NETWORK.SERVER_ERROR,
        timestamp: new Date().toISOString()
      };
    }

    // Unknown error
    return {
      status: error.status,
      message: error.message || ERROR_MESSAGES.GENERIC.UNKNOWN,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Handle 4xx client errors
   */
  private handleClientError(error: HttpErrorResponse): ApiError {
    switch (error.status) {
      case 400:
        return {
          status: 400,
          message: error.error?.message || ERROR_MESSAGES.VALIDATION.REQUIRED_FIELDS,
          errors: error.error?.errors,
          timestamp: new Date().toISOString()
        };
      
      case 401:
        return {
          status: 401,
          message: ERROR_MESSAGES.AUTH.UNAUTHORIZED,
          timestamp: new Date().toISOString()
        };
      
      case 403:
        return {
          status: 403,
          message: ERROR_MESSAGES.AUTH.UNAUTHORIZED,
          timestamp: new Date().toISOString()
        };
      
      case 404:
        return {
          status: 404,
          message: error.error?.message || 'Resource not found',
          timestamp: new Date().toISOString()
        };
      
      case 409:
        return {
          status: 409,
          message: error.error?.message || ERROR_MESSAGES.AUTH.EMAIL_EXISTS,
          timestamp: new Date().toISOString()
        };
      
      case 422:
        return {
          status: 422,
          message: error.error?.message || ERROR_MESSAGES.VALIDATION.REQUIRED_FIELDS,
          errors: error.error?.errors,
          timestamp: new Date().toISOString()
        };
      
      default:
        return {
          status: error.status,
          message: error.error?.message || ERROR_MESSAGES.GENERIC.UNKNOWN,
          timestamp: new Date().toISOString()
        };
    }
  }

  /**
   * Show error notification based on error type and context
   */
  private showErrorNotification(error: ApiError, context?: string): void {
    let title = 'Error';
    
    // Customize title based on context
    if (context) {
      switch (context) {
        case 'login':
          title = 'Login Failed';
          break;
        case 'register':
          title = 'Registration Failed';
          break;
        case 'booking':
          title = 'Booking Error';
          break;
        case 'payment':
          title = 'Payment Error';
          break;
        case 'profile':
          title = 'Profile Error';
          break;
        default:
          title = context;
      }
    }

    // Don't show notification for 401 (let auth guard handle it)
    if (error.status === 401) {
      return;
    }

    this.notificationService.error(title, error.message);
  }

  /**
   * Handle validation errors and return formatted message
   */
  handleValidationError(errors: Record<string, string[]>): string {
    const messages: string[] = [];
    
    for (const field in errors) {
      if (errors[field] && errors[field].length > 0) {
        messages.push(`${field}: ${errors[field].join(', ')}`);
      }
    }
    
    return messages.join('\n') || ERROR_MESSAGES.VALIDATION.REQUIRED_FIELDS;
  }

  /**
   * Log error for debugging (can be extended to send to error tracking service)
   */
  logError(error: Error | HttpErrorResponse, context?: string): void {
    const timestamp = new Date().toISOString();
    
    console.error(`[${timestamp}] ${context || 'Error'}:`, {
      message: error.message,
      name: error.name,
      stack: error instanceof Error ? error.stack : undefined,
      status: error instanceof HttpErrorResponse ? error.status : undefined
    });
    
    // TODO: Send to error tracking service like Sentry
  }
}
```

---

## core/services/notification.service.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/services/notification.service.ts`

```ts
import { Injectable, signal, computed } from '@angular/core';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  timestamp: Date;
}

export interface NotificationConfig {
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSignal = signal<Notification[]>([]);
  
  // Public readonly signal
  readonly notifications = this.notificationsSignal.asReadonly();
  
  // Computed for latest notification
  readonly latestNotification = computed(() => {
    const notifications = this.notificationsSignal();
    return notifications.length > 0 ? notifications[notifications.length - 1] : null;
  });

  // Default durations by type
  private readonly defaultDurations: Record<NotificationType, number> = {
    success: 3000,
    error: 5000,
    warning: 4000,
    info: 3000
  };

  /**
   * Show a notification
   */
  show(config: NotificationConfig): string {
    const id = this.generateId();
    const notification: Notification = {
      id,
      type: config.type,
      title: config.title,
      message: config.message,
      duration: config.duration ?? this.defaultDurations[config.type],
      dismissible: config.dismissible ?? true,
      timestamp: new Date()
    };

    this.notificationsSignal.update(notifications => [...notifications, notification]);

    // Auto-dismiss if duration is set
    if (notification.duration && notification.duration > 0) {
      setTimeout(() => this.dismiss(id), notification.duration);
    }

    return id;
  }

  /**
   * Show success notification
   */
  success(title: string, message: string, duration?: number): string {
    return this.show({ type: 'success', title, message, duration });
  }

  /**
   * Show error notification
   */
  error(title: string, message: string, duration?: number): string {
    return this.show({ type: 'error', title, message, duration: duration ?? 0 }); // Errors don't auto-dismiss
  }

  /**
   * Show warning notification
   */
  warning(title: string, message: string, duration?: number): string {
    return this.show({ type: 'warning', title, message, duration });
  }

  /**
   * Show info notification
   */
  info(title: string, message: string, duration?: number): string {
    return this.show({ type: 'info', title, message, duration });
  }

  /**
   * Dismiss a specific notification
   */
  dismiss(id: string): void {
    this.notificationsSignal.update(notifications => 
      notifications.filter(n => n.id !== id)
    );
  }

  /**
   * Dismiss all notifications
   */
  dismissAll(): void {
    this.notificationsSignal.set([]);
  }

  /**
   * Dismiss all notifications of a specific type
   */
  dismissByType(type: NotificationType): void {
    this.notificationsSignal.update(notifications => 
      notifications.filter(n => n.type !== type)
    );
  }

  private generateId(): string {
    return `notification-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

// Error messages constants
export const ERROR_MESSAGES = {
  // Authentication
  AUTH: {
    LOGIN_FAILED: 'Invalid email or password. Please try again.',
    REGISTRATION_FAILED: 'Registration failed. Please try again.',
    SESSION_EXPIRED: 'Your session has expired. Please log in again.',
    UNAUTHORIZED: 'You are not authorized to access this resource.',
    EMAIL_EXISTS: 'An account with this email already exists.',
  },
  // Booking
  BOOKING: {
    CREATE_FAILED: 'Failed to create booking. Please try again.',
    UPDATE_FAILED: 'Failed to update booking. Please try again.',
    CANCEL_FAILED: 'Failed to cancel booking. Please try again.',
    LOAD_FAILED: 'Failed to load bookings. Please refresh the page.',
    NOT_FOUND: 'Booking not found.',
  },
  // Network
  NETWORK: {
    CONNECTION_ERROR: 'Unable to connect to the server. Please check your internet connection.',
    TIMEOUT: 'Request timed out. Please try again.',
    SERVER_ERROR: 'Server error occurred. Please try again later.',
  },
  // Validation
  VALIDATION: {
    REQUIRED_FIELDS: 'Please fill in all required fields.',
    INVALID_EMAIL: 'Please enter a valid email address.',
    INVALID_PHONE: 'Please enter a valid phone number.',
    INVALID_PASSWORD: 'Password must be at least 8 characters long.',
    PASSWORDS_MISMATCH: 'Passwords do not match.',
  },
  // Generic
  GENERIC: {
    UNKNOWN: 'An unexpected error occurred. Please try again.',
    LOAD_FAILED: 'Failed to load data. Please refresh the page.',
  }
} as const;

// Success messages constants
export const SUCCESS_MESSAGES = {
  AUTH: {
    LOGIN_SUCCESS: 'Welcome back! You have successfully logged in.',
    REGISTRATION_SUCCESS: 'Account created successfully! Welcome to HouseMate.',
    LOGOUT_SUCCESS: 'You have been logged out successfully.',
    PASSWORD_CHANGED: 'Your password has been changed successfully.',
  },
  BOOKING: {
    CREATE_SUCCESS: 'Booking created successfully!',
    UPDATE_SUCCESS: 'Booking updated successfully!',
    CANCEL_SUCCESS: 'Booking cancelled successfully.',
    PAYMENT_SUCCESS: 'Payment completed successfully!',
  },
  PROFILE: {
    UPDATE_SUCCESS: 'Profile updated successfully!',
    ADDRESS_ADDED: 'Address added successfully!',
    ADDRESS_UPDATED: 'Address updated successfully!',
  }
} as const;
```

---

## core/store/app.state.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/app.state.ts`

```ts
import { AuthState } from './auth/auth.reducer';
import { BookingState } from './booking/booking.reducer';
import { ServiceState } from './service/service.reducer';

export interface AppState {
  auth: AuthState;
  bookings: BookingState;
  services: ServiceState;
}
```

---

## core/store/auth/auth.actions.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/auth/auth.actions.ts`

```ts
import { createAction, props } from '@ngrx/store';

// User interface
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'CUSTOMER' | 'EXPERT';
  photo?: string;
  age?: number;
  location?: {
    city: string;
    area: string;
  };
  // Expert specific
  skills?: string[];
  experience?: number;
  rating?: number;
  totalRatings?: number;
  languages?: string[];
  hourlyRate?: number;
  isVerified?: boolean;
  isOnline?: boolean;
  createdAt?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCustomerData {
  name: string;
  email: string;
  phone: string;
  password: string;
  age?: number;
  location?: {
    city: string;
    area: string;
  };
}

export interface RegisterExpertData {
  personalInfo: {
    fullName: string;
    email: string;
    password: string;
    mobileNumber: string;
    dateOfBirth: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
  };
  serviceProfile: {
    experienceYears: string;
    experienceMonths?: string;
    specializations?: string;
    hourlyRate: number;
    aboutYourself?: string;
    services: string[];
    languages: string[];
    education: string;
    availability: string;
  };
  idVerification: {
    idType: string;
    idNumber: string;
    idDocument?: string;
  };
}

// Action Types
export const AuthActionTypes = {
  // Login
  LOGIN: '[Auth] Login',
  LOGIN_SUCCESS: '[Auth] Login Success',
  LOGIN_FAILURE: '[Auth] Login Failure',
  
  // Register Customer
  REGISTER_CUSTOMER: '[Auth] Register Customer',
  REGISTER_CUSTOMER_SUCCESS: '[Auth] Register Customer Success',
  REGISTER_CUSTOMER_FAILURE: '[Auth] Register Customer Failure',
  
  // Register Expert
  REGISTER_EXPERT: '[Auth] Register Expert',
  REGISTER_EXPERT_SUCCESS: '[Auth] Register Expert Success',
  REGISTER_EXPERT_FAILURE: '[Auth] Register Expert Failure',
  
  // Logout
  LOGOUT: '[Auth] Logout',
  LOGOUT_SUCCESS: '[Auth] Logout Success',
  
  // Session
  CHECK_SESSION: '[Auth] Check Session',
  SESSION_VALID: '[Auth] Session Valid',
  SESSION_INVALID: '[Auth] Session Invalid',
  
  // Profile
  UPDATE_PROFILE: '[Auth] Update Profile',
  UPDATE_PROFILE_SUCCESS: '[Auth] Update Profile Success',
  UPDATE_PROFILE_FAILURE: '[Auth] Update Profile Failure',
  
  // Clear Error
  CLEAR_ERROR: '[Auth] Clear Error'
} as const;

// Login Actions
export const login = createAction(
  AuthActionTypes.LOGIN,
  props<{ credentials: LoginCredentials }>()
);

export const loginSuccess = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{ user: User; token: string }>()
);

export const loginFailure = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{ error: string }>()
);

// Register Customer Actions
export const registerCustomer = createAction(
  AuthActionTypes.REGISTER_CUSTOMER,
  props<{ data: RegisterCustomerData }>()
);

export const registerCustomerSuccess = createAction(
  AuthActionTypes.REGISTER_CUSTOMER_SUCCESS,
  props<{ user: User; token: string }>()
);

export const registerCustomerFailure = createAction(
  AuthActionTypes.REGISTER_CUSTOMER_FAILURE,
  props<{ error: string }>()
);

// Register Expert Actions
export const registerExpert = createAction(
  AuthActionTypes.REGISTER_EXPERT,
  props<{ data: RegisterExpertData }>()
);

export const registerExpertSuccess = createAction(
  AuthActionTypes.REGISTER_EXPERT_SUCCESS,
  props<{ user: User; token: string }>()
);

export const registerExpertFailure = createAction(
  AuthActionTypes.REGISTER_EXPERT_FAILURE,
  props<{ error: string }>()
);

// Logout Actions
export const logout = createAction(AuthActionTypes.LOGOUT);
export const logoutSuccess = createAction(AuthActionTypes.LOGOUT_SUCCESS);

// Session Actions
export const checkSession = createAction(AuthActionTypes.CHECK_SESSION);
export const sessionValid = createAction(
  AuthActionTypes.SESSION_VALID,
  props<{ user: User; token: string }>()
);
export const sessionInvalid = createAction(AuthActionTypes.SESSION_INVALID);

// Profile Actions
export const updateProfile = createAction(
  AuthActionTypes.UPDATE_PROFILE,
  props<{ data: Partial<User> }>()
);

export const updateProfileSuccess = createAction(
  AuthActionTypes.UPDATE_PROFILE_SUCCESS,
  props<{ user: User }>()
);

export const updateProfileFailure = createAction(
  AuthActionTypes.UPDATE_PROFILE_FAILURE,
  props<{ error: string }>()
);

// Clear Error
export const clearAuthError = createAction(AuthActionTypes.CLEAR_ERROR);

// Grouped actions namespace for easier imports
export const AuthActions = {
  login,
  loginSuccess,
  loginFailure,
  registerCustomer,
  registerCustomerSuccess,
  registerCustomerFailure,
  registerExpert,
  registerExpertSuccess,
  registerExpertFailure,
  logout,
  logoutSuccess,
  checkSession,
  sessionValid,
  sessionInvalid,
  updateProfile,
  updateProfileSuccess,
  updateProfileFailure,
  clearAuthError
};
```

---

## core/store/auth/auth.effects.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/auth/auth.effects.ts`

```ts
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from './auth.actions';
import { User } from './auth.actions';
import { NotificationService, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../services/notification.service';

@Injectable()
export class AuthEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);

  private readonly API_URL = 'http://localhost:3000';
  private readonly TOKEN_KEY = 'housemate_access_token';
  private readonly USER_KEY = 'housemate_user';
  private readonly TOKEN_EXPIRY_HOURS = 24;

  /** Generate a JWT-like token with expiry */
  private generateToken(user: User): string {
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const payload = btoa(JSON.stringify({
      sub: user.id,
      email: user.email,
      role: user.role,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (this.TOKEN_EXPIRY_HOURS * 60 * 60)
    }));
    const signature = btoa('housemate-secret');
    return `${header}.${payload}.${signature}`;
  }

  /** Check if token is still valid (not expired) */
  private isTokenValid(token: string): boolean {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return false;
      const payload = JSON.parse(atob(parts[1]));
      return payload.exp > Math.floor(Date.now() / 1000);
    } catch {
      return false;
    }
  }

  /** Store auth data in localStorage */
  private storeAuth(token: string, user: User): void {
    localStorage.setItem(this.TOKEN_KEY, token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  /** Clear auth data from localStorage */
  private clearAuth(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
  }

  // Login Effect
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap(({ credentials }) =>
        this.http.get<User[]>(`${this.API_URL}/users`, {
          params: { email: credentials.email }
        }).pipe(
          map(users => {
            const user = users.find(u => 
              u.email === credentials.email && (u as any).password === credentials.password
            );
            
            if (user) {
              const token = this.generateToken(user);
              this.storeAuth(token, user);
              return AuthActions.loginSuccess({ user, token });
            }
            
            return AuthActions.loginFailure({ error: ERROR_MESSAGES.AUTH.LOGIN_FAILED });
          }),
          catchError(error => of(AuthActions.loginFailure({ 
            error: error.message || ERROR_MESSAGES.AUTH.LOGIN_FAILED 
          })))
        )
      )
    )
  );

  // Login Success Effect - Show notification and navigate
  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ user }) => {
        this.notificationService.success('Welcome!', SUCCESS_MESSAGES.AUTH.LOGIN_SUCCESS);
        
        // Navigate based on role
        if (user.role === 'CUSTOMER') {
          this.router.navigate(['/customer/dashboard']);
        } else if (user.role === 'EXPERT') {
          this.router.navigate(['/expert/dashboard']);
        }
      })
    ),
    { dispatch: false }
  );

  // Login Failure Effect - Show error notification
  loginFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginFailure),
      tap(({ error }) => {
        this.notificationService.error('Login Failed', error);
      })
    ),
    { dispatch: false }
  );

  // Register Customer Effect
  registerCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerCustomer),
      exhaustMap(({ data }) =>
        // Check if email already exists
        this.http.get<User[]>(`${this.API_URL}/users`, {
          params: { email: data.email }
        }).pipe(
          exhaustMap(existingUsers => {
            if (existingUsers.length > 0) {
              return of(AuthActions.registerCustomerFailure({ 
                error: ERROR_MESSAGES.AUTH.EMAIL_EXISTS 
              }));
            }

            // Create new user
            const newUser: Partial<User> & { password: string } = {
              id: `cust-${Date.now()}`,
              ...data,
              role: 'CUSTOMER',
              createdAt: new Date().toISOString()
            };

            return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
              map(user => {
                const token = this.generateToken(user);
                this.storeAuth(token, user);
                return AuthActions.registerCustomerSuccess({ user, token });
              }),
              catchError(error => of(AuthActions.registerCustomerFailure({ 
                error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
              })))
            );
          }),
          catchError(error => of(AuthActions.registerCustomerFailure({ 
            error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
          })))
        )
      )
    )
  );

  // Register Customer Success Effect
  registerCustomerSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerCustomerSuccess),
      tap(() => {
        this.notificationService.success('Welcome!', SUCCESS_MESSAGES.AUTH.REGISTRATION_SUCCESS);
        this.router.navigate(['/customer/dashboard']);
      })
    ),
    { dispatch: false }
  );

  // Register Expert Effect
  registerExpert$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerExpert),
      exhaustMap(({ data }) => {
        // Extract email and password from personal info
        const email = data.personalInfo?.email || '';
        const password = data.personalInfo?.password || '';
        
        if (!email) {
          return of(AuthActions.registerExpertFailure({ 
            error: 'Email is required for registration' 
          }));
        }
        
        return this.http.get<User[]>(`${this.API_URL}/users`, {
          params: { email }
        }).pipe(
          exhaustMap(existingUsers => {
            if (existingUsers.length > 0) {
              return of(AuthActions.registerExpertFailure({ 
                error: ERROR_MESSAGES.AUTH.EMAIL_EXISTS 
              }));
            }

            const newUser: Partial<User> & { password?: string; personalInfo?: any; serviceProfile?: any; idVerification?: any } = {
              id: `exp-${Date.now()}`,
              name: data.personalInfo?.fullName,
              phone: data.personalInfo?.mobileNumber,
              email: email,
              password: password,
              role: 'EXPERT',
              skills: data.serviceProfile?.services || [],
              experience: parseInt(data.serviceProfile?.experienceYears || '0'),
              languages: data.serviceProfile?.languages || [],
              hourlyRate: data.serviceProfile?.hourlyRate || 0,
              location: {
                city: data.personalInfo?.city || '',
                area: data.personalInfo?.address || ''
              },
              rating: 0,
              totalRatings: 0,
              isVerified: false,
              isOnline: false,
              createdAt: new Date().toISOString(),
              // Store additional info
              personalInfo: data.personalInfo,
              serviceProfile: data.serviceProfile,
              idVerification: data.idVerification
            };

            return this.http.post<User>(`${this.API_URL}/users`, newUser).pipe(
              map(user => {
                const token = this.generateToken(user);
                this.storeAuth(token, user);
                return AuthActions.registerExpertSuccess({ user, token });
              }),
              catchError(error => of(AuthActions.registerExpertFailure({ 
                error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
              })))
            );
          }),
          catchError(error => of(AuthActions.registerExpertFailure({ 
            error: error.message || ERROR_MESSAGES.AUTH.REGISTRATION_FAILED 
          })))
        );
      })
    )
  );

  // Register Expert Success Effect
  registerExpertSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerExpertSuccess),
      tap(() => {
        this.notificationService.success('Welcome!', SUCCESS_MESSAGES.AUTH.REGISTRATION_SUCCESS);
        this.router.navigate(['/expert/dashboard']);
      })
    ),
    { dispatch: false }
  );

  // Registration Failure Effects
  registerFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerCustomerFailure, AuthActions.registerExpertFailure),
      tap(({ error }) => {
        this.notificationService.error('Registration Failed', error);
      })
    ),
    { dispatch: false }
  );

  // Logout Effect
  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.clearAuth();
      }),
      map(() => AuthActions.logoutSuccess())
    )
  );

  // Logout Success Effect
  logoutSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logoutSuccess),
      tap(() => {
        this.notificationService.info('Goodbye!', SUCCESS_MESSAGES.AUTH.LOGOUT_SUCCESS);
        this.router.navigate(['/']);
      })
    ),
    { dispatch: false }
  );

  // Check Session Effect - validates token expiry
  checkSession$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkSession),
      map(() => {
        const token = localStorage.getItem(this.TOKEN_KEY);
        const userJson = localStorage.getItem(this.USER_KEY);

        if (token && userJson) {
          try {
            if (!this.isTokenValid(token)) {
              this.clearAuth();
              return AuthActions.sessionInvalid();
            }
            const user = JSON.parse(userJson) as User;
            return AuthActions.sessionValid({ user, token });
          } catch {
            this.clearAuth();
            return AuthActions.sessionInvalid();
          }
        }
        return AuthActions.sessionInvalid();
      })
    )
  );

  // Update Profile Effect
  updateProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.updateProfile),
      exhaustMap(({ data }) => {
        const userJson = localStorage.getItem(this.USER_KEY);
        if (!userJson) {
          return of(AuthActions.updateProfileFailure({ error: 'Not authenticated' }));
        }

        const currentUser = JSON.parse(userJson) as User;

        return this.http.patch<User>(`${this.API_URL}/users/${currentUser.id}`, data).pipe(
          map(updatedUser => {
            localStorage.setItem(this.USER_KEY, JSON.stringify(updatedUser));
            return AuthActions.updateProfileSuccess({ user: updatedUser });
          }),
          catchError(error => of(AuthActions.updateProfileFailure({ 
            error: error.message || 'Failed to update profile' 
          })))
        );
      })
    )
  );

  // Update Profile Success Effect
  updateProfileSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.updateProfileSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.PROFILE.UPDATE_SUCCESS);
      })
    ),
    { dispatch: false }
  );
}
```

---

## core/store/auth/auth.reducer.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/auth/auth.reducer.ts`

```ts
import { createReducer, on } from '@ngrx/store';
import { User } from './auth.actions';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  registrationSuccess: boolean;
}

export const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  registrationSuccess: false
};

export const authReducer = createReducer(
  initialAuthState,

  // Login
  on(AuthActions.login, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error
  })),

  // Register Customer
  on(AuthActions.registerCustomer, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    registrationSuccess: false
  })),

  on(AuthActions.registerCustomerSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null,
    registrationSuccess: true
  })),

  on(AuthActions.registerCustomerFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    registrationSuccess: false
  })),

  // Register Expert
  on(AuthActions.registerExpert, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    registrationSuccess: false
  })),

  on(AuthActions.registerExpertSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null,
    registrationSuccess: true
  })),

  on(AuthActions.registerExpertFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    registrationSuccess: false
  })),

  // Logout
  on(AuthActions.logout, (state) => ({
    ...state,
    isLoading: true
  })),

  on(AuthActions.logoutSuccess, () => ({
    ...initialAuthState
  })),

  // Session
  on(AuthActions.checkSession, (state) => ({
    ...state,
    isLoading: true
  })),

  on(AuthActions.sessionValid, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    isLoading: false,
    error: null
  })),

  on(AuthActions.sessionInvalid, () => ({
    ...initialAuthState
  })),

  // Update Profile
  on(AuthActions.updateProfile, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(AuthActions.updateProfileSuccess, (state, { user }) => ({
    ...state,
    user,
    isLoading: false,
    error: null
  })),

  on(AuthActions.updateProfileFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Clear Error
  on(AuthActions.clearAuthError, (state) => ({
    ...state,
    error: null
  }))
);
```

---

## core/store/auth/auth.selectors.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/auth/auth.selectors.ts`

```ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

// Feature selector
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// Selectors
export const selectUser = createSelector(
  selectAuthState,
  (state) => state.user
);

export const selectToken = createSelector(
  selectAuthState,
  (state) => state.token
);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectIsLoading = createSelector(
  selectAuthState,
  (state) => state.isLoading
);

// Alias for backward compatibility
export const selectAuthLoading = selectIsLoading;

export const selectAuthError = createSelector(
  selectAuthState,
  (state) => state.error
);

export const selectRegistrationSuccess = createSelector(
  selectAuthState,
  (state) => state.registrationSuccess
);

export const selectUserRole = createSelector(
  selectUser,
  (user) => user?.role || null
);

export const selectIsCustomer = createSelector(
  selectUserRole,
  (role) => role === 'CUSTOMER'
);

export const selectIsExpert = createSelector(
  selectUserRole,
  (role) => role === 'EXPERT'
);

export const selectUserName = createSelector(
  selectUser,
  (user) => user?.name || ''
);

export const selectUserEmail = createSelector(
  selectUser,
  (user) => user?.email || ''
);

export const selectUserId = createSelector(
  selectUser,
  (user) => user?.id || null
);
```

---

## core/store/auth/index.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/auth/index.ts`

```ts
export * from './auth.actions';
export * from './auth.reducer';
export * from './auth.selectors';
export * from './auth.effects';
```

---

## core/store/booking/booking.actions.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/booking/booking.actions.ts`

```ts
import { createAction, props } from '@ngrx/store';

export interface Booking {
  id: string;
  customerId: string;
  expertId?: string;
  serviceId: string;
  serviceName: string;
  addressId: string;
  date: string;
  timeSlot: string;
  duration: number;
  frequency: 'once' | 'weekly' | 'monthly';
  status: BookingStatus;
  baseAmount: number;
  gstAmount: number;
  discountAmount: number;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  couponCode?: string;
  notes?: string;
  otp?: string;
  createdAt: string;
  updatedAt?: string;
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  REJECTED = 'REJECTED'
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  PAID = 'PAID',
  REFUNDED = 'REFUNDED',
  FAILED = 'FAILED'
}

export interface CreateBookingData {
  customerId: string;
  expertId?: string;
  serviceId: string;
  serviceName: string;
  addressId: string;
  date: string;
  timeSlot: string;
  duration: number;
  frequency: 'once' | 'weekly' | 'monthly';
  baseAmount: number;
  gstAmount: number;
  discountAmount: number;
  totalAmount: number;
  couponCode?: string;
}

// Action Types
export const BookingActionTypes = {
  // Load Bookings (Customer)
  LOAD_BOOKINGS: '[Booking] Load Bookings',
  LOAD_BOOKINGS_SUCCESS: '[Booking] Load Bookings Success',
  LOAD_BOOKINGS_FAILURE: '[Booking] Load Bookings Failure',

  // Load Expert Bookings
  LOAD_EXPERT_BOOKINGS: '[Booking] Load Expert Bookings',
  LOAD_EXPERT_BOOKINGS_SUCCESS: '[Booking] Load Expert Bookings Success',
  LOAD_EXPERT_BOOKINGS_FAILURE: '[Booking] Load Expert Bookings Failure',

  // Accept/Reject Booking
  ACCEPT_BOOKING: '[Booking] Accept Booking',
  ACCEPT_BOOKING_SUCCESS: '[Booking] Accept Booking Success',
  ACCEPT_BOOKING_FAILURE: '[Booking] Accept Booking Failure',

  REJECT_BOOKING: '[Booking] Reject Booking',
  REJECT_BOOKING_SUCCESS: '[Booking] Reject Booking Success',
  REJECT_BOOKING_FAILURE: '[Booking] Reject Booking Failure',

  // Load Single Booking
  LOAD_BOOKING: '[Booking] Load Booking',
  LOAD_BOOKING_SUCCESS: '[Booking] Load Booking Success',
  LOAD_BOOKING_FAILURE: '[Booking] Load Booking Failure',

  // Create Booking
  CREATE_BOOKING: '[Booking] Create Booking',
  CREATE_BOOKING_SUCCESS: '[Booking] Create Booking Success',
  CREATE_BOOKING_FAILURE: '[Booking] Create Booking Failure',

  // Update Booking
  UPDATE_BOOKING: '[Booking] Update Booking',
  UPDATE_BOOKING_SUCCESS: '[Booking] Update Booking Success',
  UPDATE_BOOKING_FAILURE: '[Booking] Update Booking Failure',

  // Cancel Booking
  CANCEL_BOOKING: '[Booking] Cancel Booking',
  CANCEL_BOOKING_SUCCESS: '[Booking] Cancel Booking Success',
  CANCEL_BOOKING_FAILURE: '[Booking] Cancel Booking Failure',

  // Update Status
  UPDATE_BOOKING_STATUS: '[Booking] Update Status',
  UPDATE_BOOKING_STATUS_SUCCESS: '[Booking] Update Status Success',
  UPDATE_BOOKING_STATUS_FAILURE: '[Booking] Update Status Failure',

  // Clear
  CLEAR_SELECTED_BOOKING: '[Booking] Clear Selected Booking',
  CLEAR_BOOKING_ERROR: '[Booking] Clear Error'
} as const;

// Load Bookings
export const loadBookings = createAction(
  BookingActionTypes.LOAD_BOOKINGS,
  props<{ customerId: string }>()
);

export const loadBookingsSuccess = createAction(
  BookingActionTypes.LOAD_BOOKINGS_SUCCESS,
  props<{ bookings: Booking[] }>()
);

export const loadBookingsFailure = createAction(
  BookingActionTypes.LOAD_BOOKINGS_FAILURE,
  props<{ error: string }>()
);

// Load Single Booking
export const loadBooking = createAction(
  BookingActionTypes.LOAD_BOOKING,
  props<{ bookingId: string }>()
);

export const loadBookingSuccess = createAction(
  BookingActionTypes.LOAD_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const loadBookingFailure = createAction(
  BookingActionTypes.LOAD_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Create Booking
export const createBooking = createAction(
  BookingActionTypes.CREATE_BOOKING,
  props<{ bookingData: CreateBookingData }>()
);

export const createBookingSuccess = createAction(
  BookingActionTypes.CREATE_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const createBookingFailure = createAction(
  BookingActionTypes.CREATE_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Update Booking
export const updateBooking = createAction(
  BookingActionTypes.UPDATE_BOOKING,
  props<{ bookingId: string; data: Partial<Booking> }>()
);

export const updateBookingSuccess = createAction(
  BookingActionTypes.UPDATE_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const updateBookingFailure = createAction(
  BookingActionTypes.UPDATE_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Cancel Booking
export const cancelBooking = createAction(
  BookingActionTypes.CANCEL_BOOKING,
  props<{ bookingId: string; reason?: string }>()
);

export const cancelBookingSuccess = createAction(
  BookingActionTypes.CANCEL_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const cancelBookingFailure = createAction(
  BookingActionTypes.CANCEL_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Update Status
export const updateBookingStatus = createAction(
  BookingActionTypes.UPDATE_BOOKING_STATUS,
  props<{ bookingId: string; status: BookingStatus }>()
);

export const updateBookingStatusSuccess = createAction(
  BookingActionTypes.UPDATE_BOOKING_STATUS_SUCCESS,
  props<{ booking: Booking }>()
);

export const updateBookingStatusFailure = createAction(
  BookingActionTypes.UPDATE_BOOKING_STATUS_FAILURE,
  props<{ error: string }>()
);

// Load Expert Bookings
export const loadExpertBookings = createAction(
  BookingActionTypes.LOAD_EXPERT_BOOKINGS,
  props<{ expertId: string }>()
);

export const loadExpertBookingsSuccess = createAction(
  BookingActionTypes.LOAD_EXPERT_BOOKINGS_SUCCESS,
  props<{ bookings: Booking[] }>()
);

export const loadExpertBookingsFailure = createAction(
  BookingActionTypes.LOAD_EXPERT_BOOKINGS_FAILURE,
  props<{ error: string }>()
);

// Accept Booking
export const acceptBooking = createAction(
  BookingActionTypes.ACCEPT_BOOKING,
  props<{ bookingId: string }>()
);

export const acceptBookingSuccess = createAction(
  BookingActionTypes.ACCEPT_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const acceptBookingFailure = createAction(
  BookingActionTypes.ACCEPT_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Reject Booking
export const rejectBooking = createAction(
  BookingActionTypes.REJECT_BOOKING,
  props<{ bookingId: string; reason?: string }>()
);

export const rejectBookingSuccess = createAction(
  BookingActionTypes.REJECT_BOOKING_SUCCESS,
  props<{ booking: Booking }>()
);

export const rejectBookingFailure = createAction(
  BookingActionTypes.REJECT_BOOKING_FAILURE,
  props<{ error: string }>()
);

// Clear
export const clearSelectedBooking = createAction(BookingActionTypes.CLEAR_SELECTED_BOOKING);
export const clearBookingError = createAction(BookingActionTypes.CLEAR_BOOKING_ERROR);

// Grouped actions namespace for easier imports
export const BookingActions = {
  loadBookings,
  loadBookingsSuccess,
  loadBookingsFailure,
  loadBooking,
  loadBookingSuccess,
  loadBookingFailure,
  createBooking,
  createBookingSuccess,
  createBookingFailure,
  updateBooking,
  updateBookingSuccess,
  updateBookingFailure,
  cancelBooking,
  cancelBookingSuccess,
  cancelBookingFailure,
  updateBookingStatus,
  updateBookingStatusSuccess,
  updateBookingStatusFailure,
  loadExpertBookings,
  loadExpertBookingsSuccess,
  loadExpertBookingsFailure,
  acceptBooking,
  acceptBookingSuccess,
  acceptBookingFailure,
  rejectBooking,
  rejectBookingSuccess,
  rejectBookingFailure,
  clearSelectedBooking,
  clearBookingError
};
```

---

## core/store/booking/booking.effects.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/booking/booking.effects.ts`

```ts
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as BookingActions from './booking.actions';
import { Booking, BookingStatus, PaymentStatus } from './booking.actions';
import { NotificationService, SUCCESS_MESSAGES, ERROR_MESSAGES } from '../../services/notification.service';

@Injectable()
export class BookingEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly notificationService = inject(NotificationService);

  private readonly API_URL = 'http://localhost:3000';

  // Load Bookings Effect
  loadBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBookings),
      exhaustMap(({ customerId }) =>
        this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
          params: { customerId }
        }).pipe(
          map(bookings => BookingActions.loadBookingsSuccess({ bookings })),
          catchError(error => of(BookingActions.loadBookingsFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Load Single Booking Effect
  loadBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadBooking),
      exhaustMap(({ bookingId }) =>
        this.http.get<Booking>(`${this.API_URL}/bookings/${bookingId}`).pipe(
          map(booking => BookingActions.loadBookingSuccess({ booking })),
          catchError(error => of(BookingActions.loadBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.NOT_FOUND 
          })))
        )
      )
    )
  );

  // Create Booking Effect
  createBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.createBooking),
      exhaustMap(({ bookingData }) => {
        // Generate 6-digit OTP for expert verification
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        
        const newBooking: Partial<Booking> = {
          ...bookingData,
          id: `book-${Date.now()}`,
          otp,
          status: BookingStatus.PENDING,
          paymentStatus: PaymentStatus.PAID,
          createdAt: new Date().toISOString()
        };

        return this.http.post<Booking>(`${this.API_URL}/bookings`, newBooking).pipe(
          map(booking => BookingActions.createBookingSuccess({ booking })),
          catchError(error => of(BookingActions.createBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.CREATE_FAILED 
          })))
        );
      })
    )
  );

  // Create Booking Success Effect
  createBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.createBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.BOOKING.CREATE_SUCCESS);
      })
    ),
    { dispatch: false }
  );

  // Update Booking Effect
  updateBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.updateBooking),
      exhaustMap(({ bookingId, data }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          ...data,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.updateBookingSuccess({ booking })),
          catchError(error => of(BookingActions.updateBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Update Booking Success Effect
  updateBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.updateBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.BOOKING.UPDATE_SUCCESS);
      })
    ),
    { dispatch: false }
  );

  // Cancel Booking Effect
  cancelBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.cancelBooking),
      exhaustMap(({ bookingId, reason }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status: BookingStatus.CANCELLED,
          cancellationReason: reason,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.cancelBookingSuccess({ booking })),
          catchError(error => of(BookingActions.cancelBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.CANCEL_FAILED 
          })))
        )
      )
    )
  );

  // Cancel Booking Success Effect
  cancelBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.cancelBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', SUCCESS_MESSAGES.BOOKING.CANCEL_SUCCESS);
      })
    ),
    { dispatch: false }
  );

  // Update Status Effect
  updateBookingStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.updateBookingStatus),
      exhaustMap(({ bookingId, status }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.updateBookingStatusSuccess({ booking })),
          catchError(error => of(BookingActions.updateBookingStatusFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Load Expert Bookings Effect
  loadExpertBookings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.loadExpertBookings),
      exhaustMap(({ expertId }) =>
        this.http.get<Booking[]>(`${this.API_URL}/bookings`, {
          params: { expertId }
        }).pipe(
          map(bookings => BookingActions.loadExpertBookingsSuccess({ bookings })),
          catchError(error => of(BookingActions.loadExpertBookingsFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Accept Booking Effect
  acceptBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.acceptBooking),
      exhaustMap(({ bookingId }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status: BookingStatus.CONFIRMED,
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.acceptBookingSuccess({ booking })),
          catchError(error => of(BookingActions.acceptBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Accept Booking Success
  acceptBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.acceptBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', 'Booking accepted successfully!');
      })
    ),
    { dispatch: false }
  );

  // Reject Booking Effect
  rejectBooking$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.rejectBooking),
      exhaustMap(({ bookingId, reason }) =>
        this.http.patch<Booking>(`${this.API_URL}/bookings/${bookingId}`, {
          status: BookingStatus.REJECTED,
          cancellationReason: reason || 'Rejected by expert',
          updatedAt: new Date().toISOString()
        }).pipe(
          map(booking => BookingActions.rejectBookingSuccess({ booking })),
          catchError(error => of(BookingActions.rejectBookingFailure({ 
            error: error.message || ERROR_MESSAGES.BOOKING.UPDATE_FAILED 
          })))
        )
      )
    )
  );

  // Reject Booking Success
  rejectBookingSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookingActions.rejectBookingSuccess),
      tap(() => {
        this.notificationService.success('Success', 'Booking rejected.');
      })
    ),
    { dispatch: false }
  );

  // Error Effects
  loadFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        BookingActions.loadBookingsFailure,
        BookingActions.loadBookingFailure,
        BookingActions.loadExpertBookingsFailure
      ),
      tap(({ error }) => {
        this.notificationService.error('Loading Error', error);
      })
    ),
    { dispatch: false }
  );

  createUpdateFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        BookingActions.createBookingFailure,
        BookingActions.updateBookingFailure,
        BookingActions.cancelBookingFailure,
        BookingActions.updateBookingStatusFailure,
        BookingActions.acceptBookingFailure,
        BookingActions.rejectBookingFailure
      ),
      tap(({ error }) => {
        this.notificationService.error('Operation Failed', error);
      })
    ),
    { dispatch: false }
  );
}
```

---

## core/store/booking/booking.reducer.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/booking/booking.reducer.ts`

```ts
import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Booking } from './booking.actions';
import * as BookingActions from './booking.actions';

export interface BookingState extends EntityState<Booking> {
  selectedBookingId: string | null;
  isLoading: boolean;
  error: string | null;
  createSuccess: boolean;
  updateSuccess: boolean;
  // Separate expert bookings state
  expertBookings: Booking[];
  expertBookingsLoading: boolean;
}

export const bookingAdapter: EntityAdapter<Booking> = createEntityAdapter<Booking>({
  selectId: (booking) => booking.id,
  sortComparer: (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
});

export const initialBookingState: BookingState = bookingAdapter.getInitialState({
  selectedBookingId: null,
  isLoading: false,
  error: null,
  createSuccess: false,
  updateSuccess: false,
  expertBookings: [],
  expertBookingsLoading: false
});

export const bookingReducer = createReducer(
  initialBookingState,

  // Load Bookings
  on(BookingActions.loadBookings, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.loadBookingsSuccess, (state, { bookings }) => 
    bookingAdapter.setAll(bookings, {
      ...state,
      isLoading: false,
      error: null
    })
  ),

  on(BookingActions.loadBookingsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Single Booking
  on(BookingActions.loadBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.loadBookingSuccess, (state, { booking }) => 
    bookingAdapter.upsertOne(booking, {
      ...state,
      selectedBookingId: booking.id,
      isLoading: false,
      error: null
    })
  ),

  on(BookingActions.loadBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Create Booking
  on(BookingActions.createBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    createSuccess: false
  })),

  on(BookingActions.createBookingSuccess, (state, { booking }) => 
    bookingAdapter.addOne(booking, {
      ...state,
      selectedBookingId: booking.id,
      isLoading: false,
      error: null,
      createSuccess: true
    })
  ),

  on(BookingActions.createBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    createSuccess: false
  })),

  // Update Booking
  on(BookingActions.updateBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null,
    updateSuccess: false
  })),

  on(BookingActions.updateBookingSuccess, (state, { booking }) => 
    bookingAdapter.updateOne(
      { id: booking.id, changes: booking },
      {
        ...state,
        isLoading: false,
        error: null,
        updateSuccess: true
      }
    )
  ),

  on(BookingActions.updateBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
    updateSuccess: false
  })),

  // Cancel Booking
  on(BookingActions.cancelBooking, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.cancelBookingSuccess, (state, { booking }) => 
    bookingAdapter.updateOne(
      { id: booking.id, changes: booking },
      {
        ...state,
        isLoading: false,
        error: null
      }
    )
  ),

  on(BookingActions.cancelBookingFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Update Status
  on(BookingActions.updateBookingStatus, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),

  on(BookingActions.updateBookingStatusSuccess, (state, { booking }) => 
    bookingAdapter.updateOne(
      { id: booking.id, changes: booking },
      {
        ...state,
        isLoading: false,
        error: null
      }
    )
  ),

  on(BookingActions.updateBookingStatusFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Expert Bookings — stored separately from customer bookings
  on(BookingActions.loadExpertBookings, (state) => ({
    ...state,
    expertBookingsLoading: true,
    error: null
  })),

  on(BookingActions.loadExpertBookingsSuccess, (state, { bookings }) => ({
    ...state,
    expertBookings: bookings,
    expertBookingsLoading: false,
    error: null
  })),

  on(BookingActions.loadExpertBookingsFailure, (state, { error }) => ({
    ...state,
    expertBookingsLoading: false,
    error
  })),

  // Accept Booking — update in expertBookings array
  on(BookingActions.acceptBooking, (state) => ({
    ...state,
    expertBookingsLoading: true,
    error: null
  })),

  on(BookingActions.acceptBookingSuccess, (state, { booking }) => ({
    ...state,
    expertBookings: state.expertBookings.map(b => b.id === booking.id ? booking : b),
    expertBookingsLoading: false,
    error: null
  })),

  on(BookingActions.acceptBookingFailure, (state, { error }) => ({
    ...state,
    expertBookingsLoading: false,
    error
  })),

  // Reject Booking — update in expertBookings array
  on(BookingActions.rejectBooking, (state) => ({
    ...state,
    expertBookingsLoading: true,
    error: null
  })),

  on(BookingActions.rejectBookingSuccess, (state, { booking }) => ({
    ...state,
    expertBookings: state.expertBookings.map(b => b.id === booking.id ? booking : b),
    expertBookingsLoading: false,
    error: null
  })),

  on(BookingActions.rejectBookingFailure, (state, { error }) => ({
    ...state,
    expertBookingsLoading: false,
    error
  })),

  // Clear
  on(BookingActions.clearSelectedBooking, (state) => ({
    ...state,
    selectedBookingId: null
  })),

  on(BookingActions.clearBookingError, (state) => ({
    ...state,
    error: null,
    createSuccess: false,
    updateSuccess: false
  }))
);
```

---

## core/store/booking/booking.selectors.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/booking/booking.selectors.ts`

```ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookingState, bookingAdapter } from './booking.reducer';
import { BookingStatus } from './booking.actions';

// Feature selector
export const selectBookingState = createFeatureSelector<BookingState>('bookings');

// Entity selectors
const { selectAll, selectEntities, selectIds, selectTotal } = bookingAdapter.getSelectors();

export const selectAllBookings = createSelector(
  selectBookingState,
  selectAll
);

export const selectBookingEntities = createSelector(
  selectBookingState,
  selectEntities
);

export const selectBookingIds = createSelector(
  selectBookingState,
  selectIds
);

export const selectBookingTotal = createSelector(
  selectBookingState,
  selectTotal
);

export const selectSelectedBookingId = createSelector(
  selectBookingState,
  (state) => state.selectedBookingId
);

export const selectSelectedBooking = createSelector(
  selectBookingEntities,
  selectSelectedBookingId,
  (entities, selectedId) => selectedId ? entities[selectedId] : null
);

export const selectBookingIsLoading = createSelector(
  selectBookingState,
  (state) => state.isLoading
);

// Alias for consistent naming
export const selectBookingLoading = selectBookingIsLoading;

export const selectBookingError = createSelector(
  selectBookingState,
  (state) => state.error
);

export const selectBookingCreateSuccess = createSelector(
  selectBookingState,
  (state) => state.createSuccess
);

export const selectBookingUpdateSuccess = createSelector(
  selectBookingState,
  (state) => state.updateSuccess
);

// Filtered selectors
export const selectUpcomingBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => 
    b.status === BookingStatus.PENDING || b.status === BookingStatus.CONFIRMED
  )
);

export const selectCompletedBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.COMPLETED)
);

export const selectCancelledBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.CANCELLED)
);

export const selectRejectedBookings = createSelector(
  selectAllBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.REJECTED)
);

export const selectBookingCounts = createSelector(
  selectAllBookings,
  (bookings) => ({
    all: bookings.length,
    upcoming: bookings.filter(b => 
      b.status === BookingStatus.PENDING || b.status === BookingStatus.CONFIRMED
    ).length,
    completed: bookings.filter(b => b.status === BookingStatus.COMPLETED).length,
    cancelled: bookings.filter(b => b.status === BookingStatus.CANCELLED).length,
    rejected: bookings.filter(b => b.status === BookingStatus.REJECTED).length
  })
);

// Select booking by ID
export const selectBookingById = (bookingId: string) => createSelector(
  selectBookingEntities,
  (entities) => entities[bookingId]
);

// ========== Expert-specific selectors (separate state) ==========

// All expert bookings from the dedicated expertBookings array
export const selectExpertBookings = createSelector(
  selectBookingState,
  (state) => state.expertBookings
);

export const selectExpertBookingsLoading = createSelector(
  selectBookingState,
  (state) => state.expertBookingsLoading
);

export const selectPendingBookings = createSelector(
  selectExpertBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.PENDING)
);

export const selectConfirmedBookings = createSelector(
  selectExpertBookings,
  (bookings) => bookings.filter(b => b.status === BookingStatus.CONFIRMED)
);

export const selectExpertBookingCounts = createSelector(
  selectExpertBookings,
  (bookings) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);

    return {
      todaysJobs: bookings.filter(b => {
        const bDate = new Date(b.date || b.createdAt);
        bDate.setHours(0, 0, 0, 0);
        return bDate.getTime() === today.getTime() && 
               (b.status === BookingStatus.CONFIRMED || b.status === BookingStatus.IN_PROGRESS);
      }).length,
      thisWeek: bookings.filter(b => {
        const bDate = new Date(b.date || b.createdAt);
        return bDate >= weekAgo && 
               (b.status === BookingStatus.CONFIRMED || b.status === BookingStatus.COMPLETED);
      }).length,
      totalEarnings: bookings
        .filter(b => b.status === BookingStatus.COMPLETED || b.status === BookingStatus.CONFIRMED)
        .reduce((sum, b) => sum + (b.totalAmount || 0), 0),
      pending: bookings.filter(b => b.status === BookingStatus.PENDING).length,
      confirmed: bookings.filter(b => b.status === BookingStatus.CONFIRMED).length,
      completed: bookings.filter(b => b.status === BookingStatus.COMPLETED).length,
      rejected: bookings.filter(b => b.status === BookingStatus.REJECTED).length,
      cancelled: bookings.filter(b => b.status === BookingStatus.CANCELLED).length
    };
  }
);
```

---

## core/store/booking/index.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/booking/index.ts`

```ts
export * from './booking.actions';
export * from './booking.reducer';
export * from './booking.selectors';
export * from './booking.effects';
```

---

## core/store/index.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/index.ts`

```ts
export * from './app.state';
export * from './auth';
export * from './booking';
export * from './service';
```

---

## core/store/service/index.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/service/index.ts`

```ts
export * from './service.actions';
export * from './service.reducer';
export * from './service.selectors';
export * from './service.effects';
```

---

## core/store/service/service.actions.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/service/service.actions.ts`

```ts
import { createAction, props } from '@ngrx/store';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  basePrice: number;
  priceUnit: string;
  isPopular: boolean;
  isFeatured: boolean;
  discount?: number;
}

export interface Expert {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  totalRatings: number;
  experience: number;
  hourlyRate: number;
  distance?: number;
  skills: string[];
  languages: string[];
  isVerified: boolean;
  isOnline: boolean;
  phone?: string;
}

// Action Types
export const ServiceActionTypes = {
  // Load Services
  LOAD_SERVICES: '[Service] Load Services',
  LOAD_SERVICES_SUCCESS: '[Service] Load Services Success',
  LOAD_SERVICES_FAILURE: '[Service] Load Services Failure',

  // Load Experts
  LOAD_EXPERTS: '[Service] Load Experts',
  LOAD_EXPERTS_SUCCESS: '[Service] Load Experts Success',
  LOAD_EXPERTS_FAILURE: '[Service] Load Experts Failure',

  // Select Service
  SELECT_SERVICE: '[Service] Select Service',
  CLEAR_SELECTED_SERVICE: '[Service] Clear Selected Service',

  // Select Expert
  SELECT_EXPERT: '[Service] Select Expert',
  CLEAR_SELECTED_EXPERT: '[Service] Clear Selected Expert',

  // Clear Error
  CLEAR_SERVICE_ERROR: '[Service] Clear Error'
} as const;

// Load Services
export const loadServices = createAction(ServiceActionTypes.LOAD_SERVICES);

export const loadServicesSuccess = createAction(
  ServiceActionTypes.LOAD_SERVICES_SUCCESS,
  props<{ services: Service[] }>()
);

export const loadServicesFailure = createAction(
  ServiceActionTypes.LOAD_SERVICES_FAILURE,
  props<{ error: string }>()
);

// Load Experts
export const loadExperts = createAction(
  ServiceActionTypes.LOAD_EXPERTS,
  props<{ serviceName?: string }>()
);

export const loadExpertsSuccess = createAction(
  ServiceActionTypes.LOAD_EXPERTS_SUCCESS,
  props<{ experts: Expert[] }>()
);

export const loadExpertsFailure = createAction(
  ServiceActionTypes.LOAD_EXPERTS_FAILURE,
  props<{ error: string }>()
);

// Select Service
export const selectService = createAction(
  ServiceActionTypes.SELECT_SERVICE,
  props<{ serviceId: string }>()
);

export const clearSelectedService = createAction(ServiceActionTypes.CLEAR_SELECTED_SERVICE);

// Select Expert
export const selectExpert = createAction(
  ServiceActionTypes.SELECT_EXPERT,
  props<{ expert: Expert }>()
);

export const clearSelectedExpert = createAction(ServiceActionTypes.CLEAR_SELECTED_EXPERT);

// Clear Error
export const clearServiceError = createAction(ServiceActionTypes.CLEAR_SERVICE_ERROR);
```

---

## core/store/service/service.effects.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/service/service.effects.ts`

```ts
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as ServiceActions from './service.actions';
import { Service, Expert } from './service.actions';
import { NotificationService, ERROR_MESSAGES } from '../../services/notification.service';

@Injectable()
export class ServiceEffects {
  private readonly actions$ = inject(Actions);
  private readonly http = inject(HttpClient);
  private readonly notificationService = inject(NotificationService);

  private readonly API_URL = 'http://localhost:3000';

  // Load Services Effect
  loadServices$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServiceActions.loadServices),
      exhaustMap(() =>
        this.http.get<Service[]>(`${this.API_URL}/services`).pipe(
          map(services => ServiceActions.loadServicesSuccess({ services })),
          catchError(error => of(ServiceActions.loadServicesFailure({ 
            error: error.message || ERROR_MESSAGES.GENERIC.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Load Experts Effect
  loadExperts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ServiceActions.loadExperts),
      exhaustMap(({ serviceName }) =>
        this.http.get<any[]>(`${this.API_URL}/users`, {
          params: { role: 'EXPERT' }
        }).pipe(
          map(users => {
            let experts = users;
            
            // Filter by service skill if provided
            if (serviceName) {
              experts = users.filter(u => 
                u.skills?.some((s: string) => 
                  s.toLowerCase().includes(serviceName.toLowerCase())
                )
              );
            }

            // Map to Expert interface
            const mappedExperts: Expert[] = experts.map(e => ({
              id: e.id,
              name: e.name,
              photo: e.photo,
              rating: e.rating || 4.5,
              totalRatings: e.totalRatings || 0,
              experience: e.experience || 0,
              hourlyRate: e.hourlyRate || 299,
              distance: Math.random() * 5 + 0.5, // Mock distance
              skills: e.skills || [],
              languages: e.languages || ['Hindi', 'English'],
              isVerified: e.isVerified || false,
              isOnline: e.isOnline || false,
              phone: e.phone
            }));

            return ServiceActions.loadExpertsSuccess({ experts: mappedExperts });
          }),
          catchError(error => of(ServiceActions.loadExpertsFailure({ 
            error: error.message || ERROR_MESSAGES.GENERIC.LOAD_FAILED 
          })))
        )
      )
    )
  );

  // Error Effects
  loadFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        ServiceActions.loadServicesFailure,
        ServiceActions.loadExpertsFailure
      ),
      tap(({ error }) => {
        this.notificationService.error('Loading Error', error);
      })
    ),
    { dispatch: false }
  );
}
```

---

## core/store/service/service.reducer.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/service/service.reducer.ts`

```ts
import { createReducer, on } from '@ngrx/store';
import { Service, Expert } from './service.actions';
import * as ServiceActions from './service.actions';

export interface ServiceState {
  services: Service[];
  experts: Expert[];
  selectedServiceId: string | null;
  selectedExpert: Expert | null;
  isLoadingServices: boolean;
  isLoadingExperts: boolean;
  error: string | null;
}

export const initialServiceState: ServiceState = {
  services: [],
  experts: [],
  selectedServiceId: null,
  selectedExpert: null,
  isLoadingServices: false,
  isLoadingExperts: false,
  error: null
};

export const serviceReducer = createReducer(
  initialServiceState,

  // Load Services
  on(ServiceActions.loadServices, (state) => ({
    ...state,
    isLoadingServices: true,
    error: null
  })),

  on(ServiceActions.loadServicesSuccess, (state, { services }) => ({
    ...state,
    services,
    isLoadingServices: false,
    error: null
  })),

  on(ServiceActions.loadServicesFailure, (state, { error }) => ({
    ...state,
    isLoadingServices: false,
    error
  })),

  // Load Experts
  on(ServiceActions.loadExperts, (state) => ({
    ...state,
    isLoadingExperts: true,
    error: null
  })),

  on(ServiceActions.loadExpertsSuccess, (state, { experts }) => ({
    ...state,
    experts,
    isLoadingExperts: false,
    error: null
  })),

  on(ServiceActions.loadExpertsFailure, (state, { error }) => ({
    ...state,
    isLoadingExperts: false,
    error
  })),

  // Select Service
  on(ServiceActions.selectService, (state, { serviceId }) => ({
    ...state,
    selectedServiceId: serviceId,
    selectedExpert: null // Clear expert when service changes
  })),

  on(ServiceActions.clearSelectedService, (state) => ({
    ...state,
    selectedServiceId: null,
    selectedExpert: null
  })),

  // Select Expert
  on(ServiceActions.selectExpert, (state, { expert }) => ({
    ...state,
    selectedExpert: expert
  })),

  on(ServiceActions.clearSelectedExpert, (state) => ({
    ...state,
    selectedExpert: null
  })),

  // Clear Error
  on(ServiceActions.clearServiceError, (state) => ({
    ...state,
    error: null
  }))
);
```

---

## core/store/service/service.selectors.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/core/store/service/service.selectors.ts`

```ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ServiceState } from './service.reducer';

// Feature selector
export const selectServiceState = createFeatureSelector<ServiceState>('services');

// Services selectors
export const selectAllServices = createSelector(
  selectServiceState,
  (state) => state.services
);

export const selectPopularServices = createSelector(
  selectAllServices,
  (services) => services.filter(s => s.isPopular)
);

export const selectFeaturedServices = createSelector(
  selectAllServices,
  (services) => services.filter(s => s.isFeatured)
);

export const selectServicesLoading = createSelector(
  selectServiceState,
  (state) => state.isLoadingServices
);

// Experts selectors
export const selectAllExperts = createSelector(
  selectServiceState,
  (state) => state.experts
);

export const selectExpertsLoading = createSelector(
  selectServiceState,
  (state) => state.isLoadingExperts
);

// Selected selectors
export const selectSelectedServiceId = createSelector(
  selectServiceState,
  (state) => state.selectedServiceId
);

export const selectSelectedService = createSelector(
  selectAllServices,
  selectSelectedServiceId,
  (services, selectedId) => selectedId ? services.find(s => s.id === selectedId) : null
);

export const selectSelectedExpert = createSelector(
  selectServiceState,
  (state) => state.selectedExpert
);

// Error selector
export const selectServiceError = createSelector(
  selectServiceState,
  (state) => state.error
);

// Service by ID
export const selectServiceById = (serviceId: string) => createSelector(
  selectAllServices,
  (services) => services.find(s => s.id === serviceId)
);
```

---

## features/auth/login/login.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/login/login.component.html`

```html
<!-- Login Page -->
<div class="login-page">
  <!-- Header -->
  <header class="header">
    <div class="header__container">
      <a routerLink="/" class="header__logo" aria-label="HouseMate Home">
        <div class="header__logo-icon">
          <span>H</span>
        </div>
        <span class="header__logo-text">HouseMate</span>
      </a>
    </div>
  </header>

  <!-- Main Content -->
  <main class="login-content">
    <!-- Left Section - Form -->
    <div class="login-form-section">
      <div class="login-form-wrapper">
        <!-- Title -->
        <div class="login-header">
          <span class="login-header__welcome">Welcome back!</span>
          <h1 class="login-header__title">LOGIN TO CONTINUE</h1>
          <p class="login-header__subtitle">
            To connect with verified, trained home-service experts for ASAP or scheduled
            services. Fast, transparent, and reliable.
          </p>
        </div>

        <!-- Role Dropdown -->
        <div class="role-dropdown">
          <button 
            type="button" 
            class="role-dropdown__trigger"
            (click)="toggleDropdown()"
            [class.active]="isDropdownOpen"
            aria-haspopup="listbox"
            [attr.aria-expanded]="isDropdownOpen"
          >
            <span>{{ selectedRole === 'customer' ? 'Customer Login' : 'Expert Login' }}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [class.rotated]="isDropdownOpen">
              <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          @if (isDropdownOpen) {
            <ul class="role-dropdown__menu" role="listbox">
              <li 
                role="option"
                [class.selected]="selectedRole === 'customer'"
                (click)="selectRole('customer')"
              >
                Customer Login
              </li>
              <li 
                role="option"
                [class.selected]="selectedRole === 'expert'"
                (click)="selectRole('expert')"
              >
                Expert Login
              </li>
            </ul>
          }
        </div>

        <!-- Login Form -->
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()" class="login-form">
          <!-- Email Field -->
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              class="form-input"
              placeholder="john@example.com"
              autocomplete="email"
            />
          </div>

          <!-- Password Field -->
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              formControlName="password"
              class="form-input"
              placeholder="Password"
              autocomplete="current-password"
            />
            <span class="form-hint">Demo: john&#64;example.com / password123</span>
          </div>

          <!-- Error Message -->
          @if (errorMessage()) {
            <div class="error-message">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 8V12M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              {{ errorMessage() }}
            </div>
          }

          <!-- Submit Button -->
          <button type="submit" class="btn-login" [disabled]="isLoading() || loginForm.invalid">
            @if (isLoading()) {
              <span class="spinner"></span>
              Logging in...
            } @else {
              LOGIN
            }
          </button>
        </form>

        <!-- Register Link -->
        <div class="login-footer">
          <p class="login-footer__register">
            Don't have an account? 
            <a [routerLink]="getRegisterLink()" class="link-register">Register here</a>
          </p>
          <a routerLink="/" class="link-home">Back to home</a>
        </div>
      </div>
    </div>

    <!-- Right Section - Image -->
    <div class="login-image-section">
      <!-- Decorative lines -->
      <div class="decorative-lines"></div>
      
      <!-- Image placeholder -->
      <div class="login-image-wrapper">
        <img 
          src="assets/download.png" 
          alt="Cleaning supplies illustration"
          class="login-image"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="login-image-placeholder" style="display: none;">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.105 20 20 19.105 20 18V6C20 4.895 19.105 4 18 4H6C4.895 4 4 4.895 4 6V18C4 19.105 4.895 20 6 20Z" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Login Image</span>
        </div>
      </div>
    </div>
  </main>
</div>
```

---

## features/auth/login/login.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/login/login.component.scss`

```scss
/* Login Page Styles - Matching Figma Design */

.login-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #FFFFFF 0%, #E8F4F8 100%);
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 32px;
    
    @media (max-width: 768px) {
      padding: 12px 16px;
    }
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
    
    &-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #0D436B 0%, #366F85 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        color: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 700;
      }
    }
    
    &-text {
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.07px;
    }
  }
}

/* Main Content */
.login-content {
  display: flex;
  min-height: 100vh;
  padding-top: 64px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
}

/* Left Section - Form */
.login-form-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
}

.login-form-wrapper {
  width: 100%;
  max-width: 400px;
}

/* Login Header */
.login-header {
  margin-bottom: 32px;
  
  &__welcome {
    display: block;
    color: #366F85;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 4px;
  }
  
  &__title {
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 12px;
    
    @media (max-width: 480px) {
      font-size: 24px;
      line-height: 32px;
    }
  }
  
  &__subtitle {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
}

/* Role Dropdown */
.role-dropdown {
  position: relative;
  margin-bottom: 24px;
  
  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 180px;
    padding: 12px 16px;
    background: #FFFFFF;
    border: 1px solid #E9EAEB;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    span {
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
    }
    
    svg {
      transition: transform 0.2s ease;
      color: #535862;
      
      &.rotated {
        transform: rotate(180deg);
      }
    }
    
    &:hover, &.active {
      border-color: #0D436B;
    }
  }
  
  &__menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 180px;
    background: #FFFFFF;
    border: 1px solid #E9EAEB;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 4px 0;
    z-index: 10;
    
    li {
      padding: 10px 16px;
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s ease;
      
      &:hover {
        background: #F5F9FB;
      }
      
      &.selected {
        background: #E8F4F8;
        color: #0D436B;
      }
    }
  }
}

/* Login Form */
.login-form {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(13, 67, 107, 0.1);
}

.form-group {
  margin-bottom: 20px;
  
  &:last-of-type {
    margin-bottom: 24px;
  }
}

.form-label {
  display: block;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  transition: border-color 0.2s ease;
  
  &::placeholder {
    color: #9CA0A8;
  }
  
  &:focus {
    outline: none;
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
}

.form-hint {
  display: block;
  margin-top: 6px;
  color: #9CA0A8;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 400;
}

/* Error Message */
.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 8px;
  color: #dc2626;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;

  svg {
    flex-shrink: 0;
  }
}

/* Spinner */
.spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-right: 8px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Login Button */
.btn-login {
  width: 100%;
  padding: 14px 24px;
  background: #0D436B;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover:not(:disabled) {
    background: #0a3555;
  }
  
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
  
  &:focus-visible {
    outline: 2px solid #0D436B;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
}

/* Login Footer */
.login-footer {
  margin-top: 24px;
  text-align: center;
  
  &__register {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
  }
}

.link-register {
  color: #0D436B;
  font-weight: 500;
  text-decoration: underline;
  margin-left: 4px;
  
  &:hover {
    color: #366F85;
  }
}

.link-home {
  color: #0D436B;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  
  &:hover {
    color: #366F85;
  }
}

/* Right Section - Image */
.login-image-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    display: none;
  }
}

.decorative-lines {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 40px,
      rgba(13, 67, 107, 0.03) 40px,
      rgba(13, 67, 107, 0.03) 42px
    );
  pointer-events: none;
}

.login-image-wrapper {
  position: relative;
  z-index: 1;
  max-width: 450px;
  padding: 40px;
}

.login-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.login-image-placeholder {
  width: 350px;
  height: 300px;
  background: linear-gradient(135deg, #E8F4F8 0%, #D5EBF3 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 2px dashed rgba(13, 67, 107, 0.3);
  
  svg {
    opacity: 0.6;
  }
  
  span {
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }
}
```

---

## features/auth/login/login.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/login/login.component.ts`

```ts
import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { selectIsAuthenticated, selectAuthLoading, selectAuthError, selectUser } from '../../../core/store/auth/auth.selectors';
import { UserRole } from '../../../core/models/user.model';
import { NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  // Form
  loginForm: FormGroup;
  
  // UI State
  selectedRole: 'customer' | 'expert' = 'customer';
  isDropdownOpen = false;
  
  // NgRx Observables
  isLoading = signal(false);
  errorMessage = signal('');

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Get role from query params
    this.route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      if (params['role'] === 'expert') {
        this.selectedRole = 'expert';
      }
    });

    // Subscribe to loading state
    this.store.select(selectAuthLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => this.isLoading.set(loading));

    // Subscribe to auth errors
    this.store.select(selectAuthError).pipe(
      takeUntil(this.destroy$),
      filter(error => error !== null)
    ).subscribe(error => {
      this.errorMessage.set(error || '');
    });

    // Handle successful authentication - redirect to dashboard
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (user) {
        // Verify that user role matches selected role
        const expectedRole = this.selectedRole === 'customer' ? UserRole.CUSTOMER : UserRole.EXPERT;
        if (user.role !== expectedRole) {
          this.store.dispatch(AuthActions.logout());
          this.errorMessage.set(`This account is registered as ${user.role.toLowerCase()}. Please select the correct login type.`);
          return;
        }

        // Navigate based on role
        if (user.role === UserRole.CUSTOMER) {
          this.router.navigate(['/customer/dashboard']);
        } else {
          this.router.navigate(['/expert/dashboard']);
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectRole(role: 'customer' | 'expert'): void {
    this.selectedRole = role;
    this.isDropdownOpen = false;
    this.errorMessage.set('');
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.errorMessage.set('');
      const { email, password } = this.loginForm.value;
      
      // Dispatch login action
      this.store.dispatch(AuthActions.login({ 
        credentials: { email, password } 
      }));
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.loginForm.controls).forEach(key => {
        this.loginForm.get(key)?.markAsTouched();
      });
      this.notification.warning('Validation Error', 'Please fill in all required fields correctly.');
    }
  }

  getRegisterLink(): string {
    return this.selectedRole === 'customer' ? '/register/customer' : '/register/expert';
  }
}

```

---

## features/auth/register-customer/register-customer.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/register-customer/register-customer.component.html`

```html
<!-- Customer Registration Page -->
<div class="register-page">
  <!-- Header -->
  <header class="header">
    <div class="header__container">
      <a routerLink="/" class="header__logo" aria-label="HouseMate Home">
        <div class="header__logo-icon">
          <span>H</span>
        </div>
        <span class="header__logo-text">HouseMate</span>
      </a>
      <nav class="header__nav">
        <a routerLink="/login" [queryParams]="{role: 'customer'}" class="header__nav-link">Customer Login</a>
        <a routerLink="/login" [queryParams]="{role: 'expert'}" class="header__nav-link">Expert Login</a>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="register-content">
    <!-- Left Section - Form -->
    <div class="register-form-section">
      <div class="register-form-wrapper">
        <!-- Title -->
        <div class="register-header">
          <span class="register-header__subtitle">New User?</span>
          <h1 class="register-header__title">REGISTER NOW!</h1>
          <p class="register-header__description">
            To connect with verified, trained home-service experts for ASAP or scheduled
            services. Fast, transparent, and reliable.
          </p>
        </div>

        <!-- Role Dropdown -->
        <div class="role-dropdown">
          <button 
            type="button" 
            class="role-dropdown__trigger"
            (click)="toggleDropdown()"
            [class.active]="isDropdownOpen"
          >
            <span>{{ selectedRole === 'customer' ? 'Customer' : 'Expert' }}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" [class.rotated]="isDropdownOpen">
              <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          @if (isDropdownOpen) {
            <ul class="role-dropdown__menu">
              <li 
                [class.selected]="selectedRole === 'customer'"
                (click)="selectRole('customer')"
              >
                Customer
              </li>
              <li 
                [class.selected]="selectedRole === 'expert'"
                (click)="selectRole('expert')"
              >
                Expert
              </li>
            </ul>
          }
        </div>

        <!-- Registration Form -->
        <form [formGroup]="registrationForm" (ngSubmit)="onSubmit()" class="register-form">
          <!-- Full Name -->
          <div class="form-group">
            <label for="fullName" class="form-label">Full Name</label>
            <input
              type="text"
              id="fullName"
              formControlName="fullName"
              class="form-input"
              placeholder="Enter your full name"
            />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              formControlName="email"
              class="form-input"
              placeholder="john@example.com"
            />
          </div>

          <!-- Mobile Number -->
          <div class="form-group">
            <label for="mobileNumber" class="form-label">Mobile Number</label>
            <div class="input-with-prefix">
              <span class="input-prefix">+91</span>
              <input
                type="tel"
                id="mobileNumber"
                formControlName="mobileNumber"
                class="form-input"
                placeholder="9876543210"
              />
            </div>
          </div>

          <!-- Password -->
          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
              type="password"
              id="password"
              formControlName="password"
              class="form-input"
              placeholder="Create a password"
            />
          </div>

          <!-- Confirm Password -->
          <div class="form-group">
            <label for="confirmPassword" class="form-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              formControlName="confirmPassword"
              class="form-input"
              placeholder="Confirm your password"
            />
          </div>

          <!-- Submit Button -->
          <button type="submit" class="btn-register" [disabled]="!registrationForm.valid">
            REGISTER
          </button>
        </form>

        <!-- Login Link -->
        <div class="register-footer">
          <p class="register-footer__login">
            Already have an account? 
            <a routerLink="/login" class="link-login">Login here</a>
          </p>
          <a routerLink="/" class="link-home">Back to home</a>
        </div>
      </div>
    </div>

    <!-- Right Section - Image -->
    <div class="register-image-section">
      <div class="decorative-lines"></div>
      <div class="register-image-wrapper">
        <img 
          src="assets/download.png" 
          alt="Cleaning supplies illustration"
          class="register-image"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <div class="register-image-placeholder" style="display: none;">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.105 20 20 19.105 20 18V6C20 4.895 19.105 4 18 4H6C4.895 4 4 4.895 4 6V18C4 19.105 4.895 20 6 20Z" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>Registration Image</span>
        </div>
      </div>
    </div>
  </main>
</div>
```

---

## features/auth/register-customer/register-customer.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/register-customer/register-customer.component.scss`

```scss
/* Customer Registration Page Styles */

.register-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #FFFFFF 0%, #E8F4F8 100%);
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 32px;
    
    @media (max-width: 768px) {
      padding: 12px 16px;
    }
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
    
    &-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #0D436B 0%, #366F85 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        color: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 700;
      }
    }
    
    &-text {
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
    }
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 8px;
    
    &-link {
      padding: 10px 12px;
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s ease;
      
      &:hover {
        background: rgba(13, 67, 107, 0.08);
      }
    }
  }
}

/* Main Content */
.register-content {
  display: flex;
  min-height: 100vh;
  padding-top: 64px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
}

/* Left Section - Form */
.register-form-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  
  @media (max-width: 768px) {
    padding: 24px 16px;
  }
}

.register-form-wrapper {
  width: 100%;
  max-width: 420px;
}

/* Register Header */
.register-header {
  margin-bottom: 24px;
  
  &__subtitle {
    display: block;
    color: #366F85;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  &__title {
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  
  &__description {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
  }
}

/* Role Dropdown */
.role-dropdown {
  position: relative;
  margin-bottom: 20px;
  
  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 160px;
    padding: 12px 16px;
    background: #FFFFFF;
    border: 1px solid #E9EAEB;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    span {
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
    }
    
    svg {
      transition: transform 0.2s ease;
      color: #535862;
      
      &.rotated {
        transform: rotate(180deg);
      }
    }
    
    &:hover, &.active {
      border-color: #0D436B;
    }
  }
  
  &__menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 160px;
    background: #FFFFFF;
    border: 1px solid #E9EAEB;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    list-style: none;
    padding: 4px 0;
    z-index: 10;
    
    li {
      padding: 10px 16px;
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s ease;
      
      &:hover {
        background: #F5F9FB;
      }
      
      &.selected {
        background: #E8F4F8;
        color: #0D436B;
      }
    }
  }
}

/* Registration Form */
.register-form {
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(13, 67, 107, 0.1);
}

.form-group {
  margin-bottom: 16px;
  
  &:last-of-type {
    margin-bottom: 24px;
  }
}

.form-label {
  display: block;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  transition: border-color 0.2s ease;
  
  &::placeholder {
    color: #9CA0A8;
  }
  
  &:focus {
    outline: none;
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
}

.input-with-prefix {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  overflow: hidden;
  
  &:focus-within {
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
  
  .input-prefix {
    padding: 12px 12px 12px 16px;
    background: #F5F9FB;
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    border-right: 1px solid #E9EAEB;
  }
  
  .form-input {
    border: none;
    border-radius: 0;
    
    &:focus {
      box-shadow: none;
    }
  }
}

/* Register Button */
.btn-register {
  width: 100%;
  padding: 14px 24px;
  background: #0D436B;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #0a3555;
  }
  
  &:disabled {
    background: #9CA0A8;
    cursor: not-allowed;
  }
}

/* Register Footer */
.register-footer {
  margin-top: 24px;
  text-align: center;
  
  &__login {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    margin-bottom: 12px;
  }
}

.link-login {
  color: #0D436B;
  font-weight: 500;
  text-decoration: underline;
  margin-left: 4px;
  
  &:hover {
    color: #366F85;
  }
}

.link-home {
  color: #0D436B;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  
  &:hover {
    color: #366F85;
  }
}

/* Right Section - Image */
.register-image-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 1024px) {
    display: none;
  }
}

.decorative-lines {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: 
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 40px,
      rgba(13, 67, 107, 0.03) 40px,
      rgba(13, 67, 107, 0.03) 42px
    );
  pointer-events: none;
}

.register-image-wrapper {
  position: relative;
  z-index: 1;
  max-width: 450px;
  padding: 40px;
}

.register-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.register-image-placeholder {
  width: 350px;
  height: 300px;
  background: linear-gradient(135deg, #E8F4F8 0%, #D5EBF3 100%);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border: 2px dashed rgba(13, 67, 107, 0.3);
  
  svg {
    opacity: 0.6;
  }
  
  span {
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }
}
```

---

## features/auth/register-customer/register-customer.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/register-customer/register-customer.component.ts`

```ts
import { Component, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { selectAuthLoading, selectAuthError, selectRegistrationSuccess } from '../../../core/store/auth/auth.selectors';
import { NotificationService } from '../../../core/services/notification.service';

// Custom validator for password match
function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordMismatch: true });
    return { passwordMismatch: true };
  }
  return null;
}

@Component({
  selector: 'app-register-customer',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register-customer.component.html',
  styleUrl: './register-customer.component.scss'
})
export class RegisterCustomerComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  // Form
  registrationForm: FormGroup;
  
  // UI State
  selectedRole: 'customer' | 'expert' = 'customer';
  isDropdownOpen = false;
  isLoading = signal(false);
  errorMessage = signal('');

  constructor() {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, { validators: passwordMatchValidator });
  }

  ngOnInit(): void {
    // Subscribe to loading state
    this.store.select(selectAuthLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => this.isLoading.set(loading));

    // Subscribe to auth errors
    this.store.select(selectAuthError).pipe(
      takeUntil(this.destroy$),
      filter(error => error !== null)
    ).subscribe(error => {
      this.errorMessage.set(error || '');
    });

    // Handle successful registration
    this.store.select(selectRegistrationSuccess).pipe(
      takeUntil(this.destroy$),
      filter(success => success === true)
    ).subscribe(() => {
      this.notification.success('Registration Successful', 'Your account has been created. Please log in.');
      this.router.navigate(['/login'], { queryParams: { role: 'customer' } });
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectRole(role: 'customer' | 'expert'): void {
    this.selectedRole = role;
    this.isDropdownOpen = false;
    
    if (role === 'expert') {
      this.router.navigate(['/register/expert']);
    }
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.errorMessage.set('');
      const { fullName, email, mobileNumber, password } = this.registrationForm.value;
      
      // Dispatch register action - map form fields to expected data structure
      this.store.dispatch(AuthActions.registerCustomer({
        data: { 
          name: fullName, 
          email, 
          phone: mobileNumber, 
          password 
        }
      }));
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.registrationForm.controls).forEach(key => {
        this.registrationForm.get(key)?.markAsTouched();
      });
      this.notification.warning('Validation Error', 'Please fill in all required fields correctly.');
    }
  }
}

```

---

## features/auth/register-expert/register-expert.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/register-expert/register-expert.component.html`

```html
<!-- Expert Registration Page -->
<div class="register-page">
  <!-- Header -->
  <header class="header">
    <div class="header__container">
      <a routerLink="/" class="header__logo" aria-label="HouseMate Home">
        <div class="header__logo-icon">
          <span>H</span>
        </div>
        <span class="header__logo-text">HouseMate</span>
      </a>
      <nav class="header__nav">
        <a routerLink="/login" [queryParams]="{role: 'customer'}" class="header__nav-link">Customer Login</a>
        <a routerLink="/login" [queryParams]="{role: 'expert'}" class="header__nav-link">Expert Login</a>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="register-content">
    <!-- Title Section -->
    <div class="register-header">
      <span class="register-header__subtitle">New User?</span>
      <h1 class="register-header__title">REGISTER NOW!</h1>
      <p class="register-header__description">
        To connect with verified, trained home-service experts for ASAP or scheduled services. Fast, transparent, and reliable.
      </p>
    </div>

    <!-- Registration Container -->
    <div class="register-container">
      <!-- Stepper Sidebar -->
      <aside class="stepper">
        <div class="stepper__steps">
          <!-- Step 1 -->
          <div 
            class="stepper__step"
            [class.active]="currentStep === 1"
            [class.completed]="isStepCompleted(1)"
            (click)="goToStep(1)"
          >
            <div class="stepper__step-indicator">
              @if (isStepCompleted(1)) {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              } @else {
                <span>1</span>
              }
            </div>
            <div class="stepper__step-content">
              <span class="stepper__step-title">Personal</span>
              <span class="stepper__step-subtitle">Information</span>
            </div>
          </div>

          <div class="stepper__line" [class.completed]="isStepCompleted(1)"></div>

          <!-- Step 2 -->
          <div 
            class="stepper__step"
            [class.active]="currentStep === 2"
            [class.completed]="isStepCompleted(2)"
            (click)="goToStep(2)"
          >
            <div class="stepper__step-indicator">
              @if (isStepCompleted(2)) {
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              } @else {
                <span>2</span>
              }
            </div>
            <div class="stepper__step-content">
              <span class="stepper__step-title">Service</span>
              <span class="stepper__step-subtitle">Profile</span>
            </div>
          </div>

          <div class="stepper__line" [class.completed]="isStepCompleted(2)"></div>

          <!-- Step 3 -->
          <div 
            class="stepper__step"
            [class.active]="currentStep === 3"
          >
            <div class="stepper__step-indicator">
              <span>3</span>
            </div>
            <div class="stepper__step-content">
              <span class="stepper__step-title">ID</span>
              <span class="stepper__step-subtitle">Verification</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Form Content -->
      <div class="form-content">
        <!-- Step 1: Personal Information -->
        @if (currentStep === 1) {
          <div class="form-step">
            <!-- Info Banner -->
            <div class="info-banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#0D436B" stroke-width="2"/>
                <path d="M12 8V12M12 16H12.01" stroke="#0D436B" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <span>Ensure all information matches your identity documents for smooth verification.</span>
            </div>

            <form [formGroup]="personalInfoForm" class="form">
              <!-- Full Name -->
              <div class="form-group full-width">
                <label class="form-label">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Full Name <span class="required">*</span>
                </label>
                <input 
                  type="text" 
                  formControlName="fullName"
                  class="form-input"
                  placeholder="Enter your full name as per ID"
                />
              </div>

              <!-- Email & Password -->
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Email Address <span class="required">*</span>
                  </label>
                  <input 
                    type="email" 
                    formControlName="email"
                    class="form-input"
                    placeholder="yourname@example.com"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
                      <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Password <span class="required">*</span>
                  </label>
                  <input 
                    type="password" 
                    formControlName="password"
                    class="form-input"
                    placeholder="Min 6 characters"
                  />
                </div>
              </div>

              <!-- Mobile Number & Date of Birth -->
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.99C14.38 21.73 8.27 18.73 4.27 14.73C0.27 10.73 -2.73 4.62 2.01 2.01C2.07 1.45 2.52 1.01 3.08 1.01H6.08C6.53 1.01 6.93 1.32 7.05 1.76C7.54 3.68 8.32 5.51 9.36 7.18L7.92 8.62C9.55 11.84 12.16 14.45 15.38 16.08L16.82 14.64C18.49 15.68 20.32 16.46 22.24 16.95C22.68 17.07 22.99 17.47 22.99 17.92L22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Mobile Number <span class="required">*</span>
                  </label>
                  <div class="input-with-prefix">
                    <span class="input-prefix">+91</span>
                    <input 
                      type="tel" 
                      formControlName="mobileNumber"
                      class="form-input"
                      placeholder="9876543210"
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label class="form-label">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                      <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    Date of Birth <span class="required">*</span>
                  </label>
                  <input 
                    type="date" 
                    formControlName="dateOfBirth"
                    class="form-input"
                  />
                </div>
              </div>

              <!-- Complete Address -->
              <div class="form-group full-width">
                <label class="form-label">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  Complete Address <span class="required">*</span>
                </label>
                <input 
                  type="text" 
                  formControlName="address"
                  class="form-input"
                  placeholder="House/Flat No., Building Name, Street, Landmark"
                />
              </div>

              <!-- City & State -->
              <div class="form-row">
                <div class="form-group">
                  <label class="form-label">City <span class="required">*</span></label>
                  <input 
                    type="text" 
                    formControlName="city"
                    class="form-input"
                    placeholder="e.g., Mumbai"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label">State <span class="required">*</span></label>
                  <input 
                    type="text" 
                    formControlName="state"
                    class="form-input"
                    placeholder="e.g., Maharashtra"
                  />
                </div>
              </div>

              <!-- PIN Code -->
              <div class="form-group">
                <label class="form-label">PIN Code <span class="required">*</span></label>
                <input 
                  type="text" 
                  formControlName="pinCode"
                  class="form-input"
                  placeholder="400001"
                  maxlength="6"
                />
              </div>
            </form>

            <!-- Actions -->
            <div class="form-actions">
              <button type="button" class="btn-primary" (click)="nextStep()" [disabled]="!personalInfoForm.valid">
                NEXT
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            <a routerLink="/" class="link-home">Back to home</a>
          </div>
        }

        <!-- Step 2: Service Profile -->
        @if (currentStep === 2) {
          <div class="form-step">
            <form [formGroup]="serviceProfileForm" class="form">
              <!-- Services You Offer -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Services You Offer <span class="required">*</span>
                </h3>
                <p class="form-section__subtitle">Select all services you can provide</p>
                <div class="services-grid">
                  @for (service of services; track service.id) {
                    <button 
                      type="button"
                      class="service-card"
                      [class.selected]="service.selected"
                      (click)="toggleService(service)"
                    >
                      <div class="service-card__icon">
                        <!-- Placeholder icon -->
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </div>
                      <span class="service-card__name">{{ service.name }}</span>
                    </button>
                  }
                </div>
              </div>

              <!-- Total Experience -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Total Experience <span class="required">*</span>
                </h3>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label-small">Years</label>
                    <select formControlName="experienceYears" class="form-select">
                      <option value="">Select years</option>
                      @for (year of experienceYears; track year) {
                        <option [value]="year">{{ year }}</option>
                      }
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label-small">Months</label>
                    <select formControlName="experienceMonths" class="form-select">
                      <option value="">Select months</option>
                      @for (month of experienceMonths; track month) {
                        <option [value]="month">{{ month }}</option>
                      }
                    </select>
                  </div>
                </div>
              </div>

              <!-- Specializations -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Specializations
                </h3>
                <p class="form-section__subtitle">Describe any specific skills or areas where you excel (optional)</p>
                <textarea 
                  formControlName="specializations"
                  class="form-textarea"
                  placeholder="E.g., Expert in deep cleaning, Experienced with traditional Indian cooking, Certified in first aid for elderly care..."
                  rows="3"
                ></textarea>
              </div>

              <!-- Language Proficiency -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                    <path d="M2 12H22M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  Language Proficiency <span class="required">*</span>
                </h3>
                <p class="form-section__subtitle">Select all languages you can communicate in</p>
                <div class="languages-grid">
                  @for (language of languages; track language.name) {
                    <button 
                      type="button"
                      class="language-chip"
                      [class.selected]="language.selected"
                      (click)="toggleLanguage(language)"
                    >
                      <span class="checkbox">
                        @if (language.selected) {
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L10 17L20 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        }
                      </span>
                      {{ language.name }}
                    </button>
                  }
                </div>
              </div>

              <!-- Education Level -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 10V16M2 10L12 5L22 10L12 15L2 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 12V17C6 17 9 20 12 20C15 20 18 17 18 17V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Education Level <span class="required">*</span>
                </h3>
                <div class="education-grid">
                  @for (level of educationLevels; track level) {
                    <button 
                      type="button"
                      class="education-chip"
                      [class.selected]="selectedEducation === level"
                      (click)="selectEducation(level)"
                    >
                      {{ level }}
                    </button>
                  }
                </div>
              </div>

              <!-- Availability -->
              <div class="form-section">
                <h3 class="form-section__title">Availability <span class="required">*</span></h3>
                <div class="availability-options">
                  @for (option of availabilityOptions; track option.value) {
                    <button 
                      type="button"
                      class="availability-card"
                      [class.selected]="selectedAvailability === option.value"
                      (click)="selectAvailability(option.value)"
                    >
                      <span class="availability-card__label">{{ option.label }}</span>
                      <span class="availability-card__description">{{ option.description }}</span>
                    </button>
                  }
                </div>
              </div>

              <!-- Expected Hourly Rate -->
              <div class="form-section">
                <h3 class="form-section__title">Expected Hourly Rate <span class="required">*</span></h3>
                <div class="input-with-suffix">
                  <span class="input-prefix">₹</span>
                  <input 
                    type="number" 
                    formControlName="hourlyRate"
                    class="form-input"
                    placeholder="Enter amount"
                  />
                  <span class="input-suffix">per hour</span>
                </div>
                <p class="form-hint">Set a competitive rate based on your experience and market standards</p>
              </div>

              <!-- About Yourself -->
              <div class="form-section">
                <h3 class="form-section__title">About Yourself (Optional)</h3>
                <p class="form-section__subtitle">Write a brief introduction about yourself and your work approach</p>
                <textarea 
                  formControlName="aboutYourself"
                  class="form-textarea"
                  placeholder="Tell customers about your experience, work ethic, and what makes you a great service provider..."
                  rows="4"
                ></textarea>
              </div>

              <!-- Verification Notice -->
              <div class="verification-notice">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>
                  <strong>Profile Verification:</strong>
                  <p>Your profile will be verified by our team within 24-48 hours. Accurate information helps you get more job opportunities and build trust with customers.</p>
                </div>
              </div>
            </form>

            <!-- Actions -->
            <div class="form-actions form-actions--split">
              <button type="button" class="btn-secondary" (click)="prevStep()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                PREVIOUS
              </button>
              <button type="button" class="btn-primary" (click)="nextStep()">
                NEXT
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        }

        <!-- Step 3: ID Verification -->
        @if (currentStep === 3) {
          <div class="form-step">
            <!-- Info Banner -->
            <div class="info-banner">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>ID verification helps build trust with customers and is required to receive bookings.</span>
            </div>

            <form [formGroup]="idVerificationForm" class="form">
              <!-- ID Type Selection -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                    <circle cx="9" cy="10" r="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M15 8H18M15 12H18M7 16H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  Select ID Type <span class="required">*</span>
                </h3>
                <div class="id-type-grid">
                  @for (idType of idTypes; track idType.value) {
                    <button 
                      type="button"
                      class="id-type-card"
                      [class.selected]="selectedIdType === idType.value"
                      (click)="selectIdType(idType.value)"
                    >
                      <div class="id-type-card__icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                          <circle cx="9" cy="10" r="2" stroke="currentColor" stroke-width="2"/>
                          <path d="M15 8H18M15 12H18M7 16H17" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      </div>
                      <span class="id-type-card__name">{{ idType.label }}</span>
                    </button>
                  }
                </div>
              </div>

              <!-- ID Number -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 20H21V18C21 16.3431 19.6569 15 18 15H10C8.34315 15 7 16.3431 7 18V20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="14" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M3 8H7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M3 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    <path d="M3 16H6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  ID Number <span class="required">*</span>
                </h3>
                <input 
                  type="text" 
                  formControlName="idNumber"
                  class="form-input"
                  [placeholder]="getIdPlaceholder()"
                />
                <p class="form-hint">Enter the {{ selectedIdType || 'ID' }} number exactly as it appears on your document</p>
              </div>

              <!-- Document Upload -->
              <div class="form-section">
                <h3 class="form-section__title">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15M17 8L12 3M12 3L7 8M12 3V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Upload ID Document <span class="required">*</span>
                </h3>
                <p class="form-section__subtitle">Upload a clear photo of your ID (front side)</p>
                
                <div class="upload-area" (click)="triggerFileUpload()" (dragover)="onDragOver($event)" (drop)="onFileDrop($event)">
                  @if (!uploadedFileName) {
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="upload-area__text">Drag and drop your file here, or <span class="link">browse</span></span>
                    <span class="upload-area__hint">Supported formats: JPG, PNG, PDF (Max 5MB)</span>
                  } @else {
                    <div class="uploaded-file">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8M14 2L20 8M14 2V8H20" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9 13L11 15L15 11" stroke="#0D436B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span class="uploaded-file__name">{{ uploadedFileName }}</span>
                      <button type="button" class="uploaded-file__remove" (click)="removeUploadedFile($event)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  }
                  <input 
                    type="file" 
                    #fileInput
                    class="file-input"
                    accept=".jpg,.jpeg,.png,.pdf"
                    (change)="onFileSelected($event)"
                  />
                </div>
              </div>

              <!-- Terms Agreement -->
              <div class="terms-section">
                <label class="checkbox-label">
                  <input type="checkbox" [(ngModel)]="termsAccepted" [ngModelOptions]="{standalone: true}" />
                  <span class="checkbox-custom">
                    @if (termsAccepted) {
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L10 17L20 7" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    }
                  </span>
                  <span class="checkbox-text">
                    I confirm that all information provided is accurate and I agree to the 
                    <a href="#" class="link">Terms of Service</a> and 
                    <a href="#" class="link">Privacy Policy</a>
                  </span>
                </label>
              </div>

              <!-- Verification Notice -->
              <div class="verification-notice verification-notice--success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div>
                  <strong>Almost Done!</strong>
                  <p>After submission, our team will verify your details within 24-48 hours. You'll receive a notification once approved.</p>
                </div>
              </div>
            </form>

            <!-- Actions -->
            <div class="form-actions form-actions--split">
              <button type="button" class="btn-secondary" (click)="prevStep()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                PREVIOUS
              </button>
              <button type="button" class="btn-primary btn-primary--success" (click)="onSubmit()" [disabled]="!canSubmit()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                SUBMIT FOR VERIFICATION
              </button>
            </div>

            <a routerLink="/" class="link-home">Back to home</a>
          </div>
        }
      </div>
    </div>
  </main>
</div>
```

---

## features/auth/register-expert/register-expert.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/register-expert/register-expert.component.scss`

```scss
/* Expert Registration Page Styles - Matching Figma Design */

.register-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #FFFFFF 0%, #E8F4F8 100%);
}

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 32px;
    
    @media (max-width: 768px) {
      padding: 12px 16px;
    }
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    text-decoration: none;
    
    &-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #0D436B 0%, #366F85 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        color: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 700;
      }
    }
    
    &-text {
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.07px;
    }
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 8px;
    
    &-link {
      display: flex;
      padding: 10px 12px;
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s ease;
      
      &:hover {
        background: rgba(13, 67, 107, 0.08);
      }
    }
  }
}

/* Main Content */
.register-content {
  padding-top: 80px;
  padding-bottom: 40px;
}

/* Register Header */
.register-header {
  text-align: center;
  padding: 40px 20px 32px;
  
  &__subtitle {
    display: block;
    color: #366F85;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  &__title {
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 12px;
    
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
  
  &__description {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    max-width: 600px;
    margin: 0 auto;
  }
}

/* Registration Container */
.register-container {
  display: flex;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 40px;
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
}

/* Stepper Sidebar */
.stepper {
  width: 180px;
  flex-shrink: 0;
  padding-top: 40px;
  
  @media (max-width: 900px) {
    width: 100%;
    padding-top: 0;
  }
  
  &__steps {
    display: flex;
    flex-direction: column;
    
    @media (max-width: 900px) {
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
    }
  }
  
  &__step {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;
    
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    &-indicator {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FFFFFF;
      border: 2px solid #E9EAEB;
      color: #9CA0A8;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      transition: all 0.3s ease;
      flex-shrink: 0;
    }
    
    &-content {
      display: flex;
      flex-direction: column;
      padding-top: 4px;
    }
    
    &-title {
      color: #9CA0A8;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
      transition: color 0.3s ease;
    }
    
    &-subtitle {
      color: #9CA0A8;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      transition: color 0.3s ease;
    }
    
    &.active {
      .stepper__step-indicator {
        background: #0D436B;
        border-color: #0D436B;
        color: #FFFFFF;
      }
      
      .stepper__step-title,
      .stepper__step-subtitle {
        color: #181D27;
      }
    }
    
    &.completed {
      .stepper__step-indicator {
        background: #22C55E;
        border-color: #22C55E;
        color: #FFFFFF;
      }
      
      .stepper__step-title,
      .stepper__step-subtitle {
        color: #181D27;
      }
    }
  }
  
  &__line {
    width: 2px;
    height: 40px;
    background: #E9EAEB;
    margin-left: 17px;
    transition: background 0.3s ease;
    
    @media (max-width: 900px) {
      width: 40px;
      height: 2px;
      margin: 16px 8px;
    }
    
    &.completed {
      background: #22C55E;
    }
  }
}

/* Form Content */
.form-content {
  flex: 1;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(13, 67, 107, 0.1);
  padding: 32px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
}

.form-step {
  max-width: 700px;
  margin: 0 auto;
}

/* Info Banner */
.info-banner {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: #E8F4F8;
  border-radius: 8px;
  margin-bottom: 24px;
  
  svg {
    flex-shrink: 0;
    color: #0D436B;
  }
  
  span {
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 20px;
  }
}

/* Form Styles */
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.form-group {
  &.full-width {
    grid-column: 1 / -1;
  }
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  
  svg {
    color: #535862;
  }
  
  .required {
    color: #EF4444;
  }
}

.form-label-small {
  display: block;
  color: #535862;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 6px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: #9CA0A8;
  }
  
  &:focus {
    outline: none;
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
}

.form-select {
  width: 100%;
  padding: 12px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9L12 15L18 9' stroke='%23535862' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  
  &:focus {
    outline: none;
    border-color: #0D436B;
  }
}

.form-textarea {
  width: 100%;
  padding: 12px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  
  &::placeholder {
    color: #9CA0A8;
  }
  
  &:focus {
    outline: none;
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
}

.input-with-prefix {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  overflow: hidden;
  
  &:focus-within {
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
  
  .input-prefix {
    padding: 12px 12px 12px 16px;
    background: #F5F9FB;
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    border-right: 1px solid #E9EAEB;
  }
  
  .form-input {
    border: none;
    border-radius: 0;
    
    &:focus {
      box-shadow: none;
    }
  }
}

.input-with-suffix {
  display: flex;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  overflow: hidden;
  max-width: 300px;
  
  &:focus-within {
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
  
  .input-prefix {
    padding: 12px 8px 12px 16px;
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
  
  .input-suffix {
    padding: 12px 16px 12px 8px;
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    white-space: nowrap;
  }
  
  .form-input {
    border: none;
    border-radius: 0;
    padding: 12px 8px;
    
    &:focus {
      box-shadow: none;
    }
  }
}

.form-hint {
  margin-top: 6px;
  color: #9CA0A8;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
}

/* Form Sections */
.form-section {
  margin-bottom: 28px;
  
  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 8px;
    
    svg {
      color: #535862;
    }
    
    .required {
      color: #EF4444;
    }
  }
  
  &__subtitle {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    margin-bottom: 12px;
  }
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.service-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: #FFFFFF;
  border: 2px solid #E9EAEB;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0D436B;
  }
  
  &.selected {
    border-color: #0D436B;
    background: #E8F4F8;
  }
  
  &__icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg {
      color: #0D436B;
    }
  }
  
  &__name {
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
  }
}

/* Languages Grid */
.languages-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.language-chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  .checkbox {
    width: 16px;
    height: 16px;
    border: 2px solid #E9EAEB;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }
  
  &:hover {
    border-color: #0D436B;
  }
  
  &.selected {
    border-color: #0D436B;
    background: #E8F4F8;
    
    .checkbox {
      background: #0D436B;
      border-color: #0D436B;
      color: #FFFFFF;
    }
  }
  
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
}

/* Education Grid */
.education-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.education-chip {
  padding: 10px 20px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0D436B;
  }
  
  &.selected {
    border-color: #0D436B;
    background: #0D436B;
    color: #FFFFFF;
  }
}

/* Availability Options */
.availability-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.availability-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    border-color: #0D436B;
  }
  
  &.selected {
    border-color: #0D436B;
    background: #E8F4F8;
  }
  
  &__label {
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  &__description {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
  }
}

/* Verification Notice */
.verification-notice {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: #E8F4F8;
  border-radius: 8px;
  margin-top: 24px;
  
  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  strong {
    display: block;
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  p {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    line-height: 20px;
    margin: 0;
  }
}

/* Form Actions */
.form-actions {
  display: flex;
  justify-content: center;
  margin-top: 32px;
  
  &--split {
    justify-content: space-between;
    gap: 16px;
    
    @media (max-width: 600px) {
      flex-direction: column-reverse;
    }
  }
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 40px;
  background: #0D436B;
  border: none;
  border-radius: 8px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: #0a3555;
  }
  
  &:disabled {
    background: #9CA0A8;
    cursor: not-allowed;
  }
  
  svg {
    flex-shrink: 0;
  }
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 32px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #F5F9FB;
    border-color: #0D436B;
  }
}

.link-home {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #0D436B;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  
  &:hover {
    color: #366F85;
  }
}

/* Step 3 - ID Verification Styles */

.id-type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.id-type-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 12px;
  background: #FFFFFF;
  border: 2px solid #E9EAEB;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0D436B;
    background: #F5F9FB;
  }
  
  &.selected {
    border-color: #0D436B;
    background: #E8F4F8;
  }
  
  &__icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0D436B;
  }
  
  &__name {
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 500;
    text-align: center;
  }
}

.upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 40px 24px;
  background: #FFFFFF;
  border: 2px dashed #D1D5DB;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0D436B;
    background: #F5F9FB;
  }
  
  &__text {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    text-align: center;
    
    .link {
      color: #0D436B;
      font-weight: 600;
      cursor: pointer;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  &__hint {
    color: #9CA0A8;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
  }
}

.file-input {
  display: none;
}

.uploaded-file {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: #E8F4F8;
  border-radius: 8px;
  width: 100%;
  
  &__name {
    flex: 1;
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  &__remove {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: #FFFFFF;
    border: 1px solid #E9EAEB;
    border-radius: 4px;
    cursor: pointer;
    color: #535862;
    transition: all 0.2s ease;
    
    &:hover {
      background: #FEE2E2;
      border-color: #EF4444;
      color: #EF4444;
    }
  }
}

.terms-section {
  margin-top: 24px;
  margin-bottom: 16px;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
  
  input[type="checkbox"] {
    display: none;
  }
}

.checkbox-custom {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border: 2px solid #D1D5DB;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  input[type="checkbox"]:checked + & {
    background: #0D436B;
    border-color: #0D436B;
    color: #FFFFFF;
  }
}

.checkbox-text {
  color: #535862;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  
  .link {
    color: #0D436B;
    font-weight: 500;
    text-decoration: underline;
    
    &:hover {
      color: #366F85;
    }
  }
}

.verification-notice--success {
  background: #E8F4F8;
  border-color: rgba(13, 67, 107, 0.2);
  
  strong {
    color: #0D436B;
  }
}

.btn-primary--success {
  background: #059669;
  
  &:hover:not(:disabled) {
    background: #047857;
  }
}
```

---

## features/auth/register-expert/register-expert.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/auth/register-expert/register-expert.component.ts`

```ts
import { Component, ViewChild, ElementRef, OnInit, OnDestroy, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { selectAuthLoading, selectAuthError } from '../../../core/store/auth/auth.selectors';
import { NotificationService } from '../../../core/services/notification.service';

interface ServiceOption {
  id: string;
  name: string;
  icon: string;
  selected: boolean;
}

interface LanguageOption {
  name: string;
  selected: boolean;
}

interface IdTypeOption {
  value: string;
  label: string;
  placeholder: string;
}

@Component({
  selector: 'app-register-expert',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './register-expert.component.html',
  styleUrl: './register-expert.component.scss'
})
export class RegisterExpertComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly fb = inject(FormBuilder);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  currentStep = 1;
  totalSteps = 3;
  
  // Step 1: Personal Information Form
  personalInfoForm: FormGroup;
  
  // Step 2: Service Profile Form
  serviceProfileForm: FormGroup;
  
  // Step 3: ID Verification Form
  idVerificationForm: FormGroup;

  // Loading and error states
  isLoading = signal(false);
  errorMessage = signal('');

  // Service options
  services: ServiceOption[] = [
    { id: 'cleaning', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'cooking', name: 'Cooking', icon: 'cooking-icon.png', selected: false },
    { id: 'gardening', name: 'Gardening', icon: 'gardening-icon.png', selected: false },
    { id: 'plumbing', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'electrical', name: 'Gardening', icon: 'gardening-icon.png', selected: false },
    { id: 'cleaning2', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'cooking2', name: 'Cooking', icon: 'cooking-icon.png', selected: false },
    { id: 'gardening2', name: 'Gardening', icon: 'gardening-icon.png', selected: false },
    { id: 'cleaning3', name: 'Cleaning', icon: 'cleaning-icon.png', selected: false },
    { id: 'gardening3', name: 'Gardening', icon: 'gardening-icon.png', selected: false }
  ];

  // Language options
  languages: LanguageOption[] = [
    { name: 'English', selected: false },
    { name: 'Hindi', selected: false },
    { name: 'Marathi', selected: false },
    { name: 'Tamil', selected: false },
    { name: 'Telugu', selected: false },
    { name: 'Kannada', selected: false },
    { name: 'Bengali', selected: false },
    { name: 'Gujarati', selected: false },
    { name: 'Malayalam', selected: false },
    { name: 'Punjabi', selected: false },
    { name: 'Urdu', selected: false }
  ];

  // Education options
  educationLevels = [
    'Below 10th',
    '10th Pass',
    '12th Pass',
    'Graduate',
    'Post Graduate',
    'Diploma/Certificate Course'
  ];
  selectedEducation = '';

  // Availability options
  availabilityOptions = [
    { value: 'full-time', label: 'Full-time', description: 'Available 6-8 hours per day' },
    { value: 'part-time', label: 'Part-time', description: 'Available 3-5 hours per day' },
    { value: 'flexible', label: 'Flexible', description: 'Available as needed' }
  ];
  selectedAvailability = '';

  // Experience years and months
  experienceYears = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'];
  experienceMonths = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

  // ID Type options for Step 3
  idTypes: IdTypeOption[] = [
    { value: 'aadhaar', label: 'Aadhaar Card', placeholder: 'Enter 12-digit Aadhaar number' },
    { value: 'pan', label: 'PAN Card', placeholder: 'Enter 10-character PAN number' },
    { value: 'voter', label: 'Voter ID', placeholder: 'Enter Voter ID number' },
    { value: 'passport', label: 'Passport', placeholder: 'Enter Passport number' },
    { value: 'driving', label: 'Driving License', placeholder: 'Enter DL number' }
  ];
  selectedIdType = '';
  uploadedFileName = '';
  termsAccepted = false;

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor() {
    // Initialize forms
    this.personalInfoForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [Validators.required, Validators.pattern(/^[0-9]{6}$/)]]
    });

    this.serviceProfileForm = this.fb.group({
      experienceYears: ['', Validators.required],
      experienceMonths: [''],
      specializations: [''],
      hourlyRate: ['', [Validators.required, Validators.min(0)]],
      aboutYourself: ['']
    });

    this.idVerificationForm = this.fb.group({
      idType: ['', Validators.required],
      idNumber: ['', Validators.required],
      idDocument: ['']
    });
  }

  ngOnInit(): void {
    // Subscribe to loading state
    this.store.select(selectAuthLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => this.isLoading.set(loading));

    // Subscribe to auth errors
    this.store.select(selectAuthError).pipe(
      takeUntil(this.destroy$),
      filter(error => error !== null)
    ).subscribe(error => {
      this.errorMessage.set(error || '');
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Toggle service selection
  toggleService(service: ServiceOption): void {
    service.selected = !service.selected;
  }

  // Toggle language selection
  toggleLanguage(language: LanguageOption): void {
    language.selected = !language.selected;
  }

  // Select education level
  selectEducation(level: string): void {
    this.selectedEducation = level;
  }

  // Select availability
  selectAvailability(value: string): void {
    this.selectedAvailability = value;
  }

  // Check if at least one service is selected
  hasSelectedServices(): boolean {
    return this.services.some(s => s.selected);
  }

  // Check if at least one language is selected
  hasSelectedLanguages(): boolean {
    return this.languages.some(l => l.selected);
  }

  // Navigate to next step
  nextStep(): void {
    if (this.currentStep === 1 && this.personalInfoForm.valid) {
      this.currentStep = 2;
    } else if (this.currentStep === 2) {
      if (this.hasSelectedServices() && this.hasSelectedLanguages() && 
          this.selectedEducation && this.selectedAvailability && 
          this.serviceProfileForm.get('hourlyRate')?.valid) {
        this.currentStep = 3;
      }
    }
  }

  // Navigate to previous step
  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Go to specific step
  goToStep(step: number): void {
    if (step < this.currentStep) {
      this.currentStep = step;
    }
  }

  // Submit registration
  onSubmit(): void {
    if (!this.canSubmit()) {
      this.notification.warning('Incomplete Form', 'Please complete all required fields.');
      return;
    }

    this.errorMessage.set('');
    
    const registrationData = {
      personalInfo: this.personalInfoForm.value,
      serviceProfile: {
        ...this.serviceProfileForm.value,
        services: this.services.filter(s => s.selected).map(s => s.id),
        languages: this.languages.filter(l => l.selected).map(l => l.name),
        education: this.selectedEducation,
        availability: this.selectedAvailability
      },
      idVerification: this.idVerificationForm.value
    };
    
    // Dispatch register action
    this.store.dispatch(AuthActions.registerExpert({ data: registrationData }));
  }

  // Check if step is completed
  isStepCompleted(step: number): boolean {
    if (step === 1) {
      return this.currentStep > 1;
    } else if (step === 2) {
      return this.currentStep > 2;
    }
    return false;
  }

  // Step 3 Methods
  selectIdType(idType: string): void {
    this.selectedIdType = idType;
    this.idVerificationForm.patchValue({ idType });
  }

  getIdPlaceholder(): string {
    const found = this.idTypes.find(t => t.value === this.selectedIdType);
    return found?.placeholder || 'Enter your ID number';
  }

  triggerFileUpload(): void {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.size <= 5 * 1024 * 1024) { // 5MB limit
        this.uploadedFileName = file.name;
        this.idVerificationForm.patchValue({ idDocument: file.name });
      } else {
        alert('File size must be less than 5MB');
      }
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer?.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      if (file.size <= 5 * 1024 * 1024) { // 5MB limit
        this.uploadedFileName = file.name;
        this.idVerificationForm.patchValue({ idDocument: file.name });
      } else {
        alert('File size must be less than 5MB');
      }
    }
  }

  removeUploadedFile(event: Event): void {
    event.stopPropagation();
    this.uploadedFileName = '';
    this.idVerificationForm.patchValue({ idDocument: '' });
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  canSubmit(): boolean {
    return this.selectedIdType !== '' && 
           this.idVerificationForm.get('idNumber')?.valid === true && 
           this.termsAccepted;
  }
}

```

---

## features/customer/book-service/book-service.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/book-service/book-service.component.html`

```html
<!-- Book Service Page -->
<div class="book-service-page">
  <!-- Shared Navbar -->
  <app-navbar [pageType]="'customer'" />

  <!-- Main Content -->
  <main class="main-content">
    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <a routerLink="/customer/dashboard">Home</a>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"/>
      </svg>
      @if (isModifyMode()) {
        <a routerLink="/customer/bookings">My Bookings</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span class="breadcrumb__active">Modify Booking</span>
      } @else {
        <span class="breadcrumb__active">Book a Service</span>
      }
      @if (isAddingNewAddress()) {
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span class="breadcrumb__active">Add New Address</span>
      }
    </nav>

    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1 class="page-header__title">{{ isModifyMode() ? 'MODIFY BOOKING' : 'BOOK A SERVICE' }}</h1>
        <p class="page-header__subtitle">{{ isModifyMode() ? 'Update your booking details and preferences' : 'Find a trusted expert for all your household needs' }}</p>
      </div>
      <button class="btn-next" (click)="currentStep() < 4 ? nextStep() : openPaymentModal()" [disabled]="!isStepComplete(currentStep())">
        @if (currentStep() === 4) {
          @if (isModifyMode()) {
            @if (isAdditionalPaymentRequired()) {
              Pay ₹{{ paymentDifference() | number:'1.0-0' }} & Update
            } @else {
              Update Booking
            }
          } @else {
            Payment
          }
        } @else {
          Next
        }
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Step 1: Select Service -->
    @if (currentStep() === 1) {
      <div class="step-content">
        <!-- Services Selection -->
        <section class="services-section">
          <h3 class="section-label">Select Service</h3>
          <div class="services-scroll">
            @for (service of services(); track service.id) {
              <button class="service-card" [class.selected]="selectedServiceId() === service.id" (click)="selectService(service.id)">
                <div class="service-card__icon">
                  <img [src]="service.icon || 'assets/images/services/default-icon.png'" [alt]="service.name" />
                </div>
                <span class="service-card__name">{{ service.name }}</span>
              </button>
            }
          </div>
        </section>

        <!-- Experts Section -->
        <section class="experts-section">
          <div class="experts-header">
            <h3 class="section-label section-label--teal">Available Expert Near You</h3>
            <div class="experts-actions">
              <button class="icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
              <button class="icon-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          @if (isLoadingExperts()) {
            <div class="experts-loading">
              <div class="spinner"></div>
              <span>Loading experts...</span>
            </div>
          } @else {
            <div class="experts-grid">
              @for (expert of experts(); track expert.id) {
                <button class="expert-card" [class.selected]="selectedExpert()?.id === expert.id" (click)="selectExpert(expert)">
                  <div class="expert-card__avatar">
                    <img [src]="expert.photo || 'assets/images/default-avatar.png'" [alt]="expert.name" />
                  </div>
                  <div class="expert-card__info">
                    <div class="expert-card__row">
                      <h4 class="expert-card__name">{{ expert.name }}</h4>
                      @if (expert.isVerified) {
                        <span class="verified-badge">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12L10 17L20 7" stroke="currentColor" stroke-width="3"/>
                          </svg>
                          Verified
                        </span>
                      }
                      <span class="expert-card__rate">₹{{ expert.hourlyRate }}/hr</span>
                    </div>
                    <div class="expert-card__meta">
                      <span class="meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FFC107"/>
                        </svg>
                        {{ expert.rating }} ({{ expert.totalRatings }}),
                      </span>
                      <span class="meta-item">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
                          <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        {{ expert.experience }} years experience
                      </span>
                    </div>
                    <div class="expert-card__location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                      {{ expert.distance?.toFixed(1) }} km away
                    </div>
                    <div class="expert-card__skills">
                      @for (skill of expert.skills.slice(0, 2); track skill) {
                        <span class="skill-tag">{{ skill }}</span>
                      }
                    </div>
                    <div class="expert-card__languages">Languages: {{ expert.languages.join(', ') }}</div>
                    <a href="#" class="expert-card__link">View Certificates</a>
                  </div>
                </button>
              }
            </div>
          }
        </section>
      </div>
    }

    <!-- Step 2 & beyond: Show accordion steps -->
    @if (currentStep() >= 2 || isModifyMode()) {
      <div class="steps-accordion">
        <!-- Step 1 Accordion - Select Service -->
        <div class="accordion-step" [class.completed]="isStepCompleted(1)" [class.active]="currentStep() === 1">
          <div class="accordion-step__header" (click)="goToStep(1)">
            <div class="accordion-step__title">
              <span>Select Service</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="chevron">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            @if (isStepCompleted(1)) {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="check-icon">
                <circle cx="12" cy="12" r="11" fill="#10B981"/>
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            }
          </div>
          
          <!-- Show step 1 content in modify mode when clicked -->
          @if (currentStep() === 1 && isModifyMode()) {
            <div class="accordion-step__content">
              <!-- Services Selection -->
              <section class="services-section">
                <h3 class="section-label">Select Service</h3>
                <div class="services-scroll">
                  @for (service of services(); track service.id) {
                    <button class="service-card" [class.selected]="selectedServiceId() === service.id" (click)="selectService(service.id)">
                      <div class="service-card__icon">
                        <img [src]="service.icon || 'assets/images/services/default-icon.png'" [alt]="service.name" />
                      </div>
                      <span class="service-card__name">{{ service.name }}</span>
                    </button>
                  }
                </div>
              </section>

              <!-- Experts Section -->
              <section class="experts-section">
                <div class="experts-header">
                  <h3 class="section-label section-label--teal">Available Expert Near You</h3>
                </div>
                @if (isLoadingExperts()) {
                  <div class="experts-loading">
                    <div class="spinner"></div>
                    <span>Loading experts...</span>
                  </div>
                } @else {
                  <div class="experts-grid">
                    @for (expert of experts(); track expert.id) {
                      <button class="expert-card" [class.selected]="selectedExpert()?.id === expert.id" (click)="selectExpert(expert)">
                        <div class="expert-card__avatar">
                          <img [src]="expert.photo || 'assets/images/default-avatar.png'" [alt]="expert.name" />
                        </div>
                        <div class="expert-card__info">
                          <div class="expert-card__row">
                            <h4 class="expert-card__name">{{ expert.name }}</h4>
                            @if (expert.isVerified) {
                              <span class="verified-badge">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                                  <path d="M5 12L10 17L20 7" stroke="currentColor" stroke-width="3"/>
                                </svg>
                                Verified
                              </span>
                            }
                            <span class="expert-card__rate">₹{{ expert.hourlyRate }}/hr</span>
                          </div>
                          <div class="expert-card__meta">
                            <span class="meta-item">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FFC107"/>
                              </svg>
                              {{ expert.rating }} ({{ expert.totalRatings }})
                            </span>
                            <span class="meta-item">{{ expert.experience }} yrs exp</span>
                          </div>
                        </div>
                      </button>
                    }
                  </div>
                }
              </section>
            </div>
          }
        </div>

        <!-- Step 2 Accordion - Select Date & Time -->
        <div class="accordion-step" [class.active]="currentStep() === 2" [class.completed]="isStepCompleted(2)">
          <div class="accordion-step__header" (click)="goToStep(2)">
            <div class="accordion-step__title">
              <span>Select Date & Time</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="chevron">
                <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            @if (isStepCompleted(2)) {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="check-icon">
                <circle cx="12" cy="12" r="11" fill="#10B981"/>
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            }
          </div>
          
          @if (currentStep() === 2) {
            <div class="accordion-step__content">
              <div class="datetime-container">
                <!-- Calendar Section -->
                <div class="calendar-section">
                  <div class="calendar-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                      <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>Preferred Date</span>
                    <select class="frequency-select" [(ngModel)]="bookingFrequency">
                      <option value="Once">Once</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Monthly">Monthly</option>
                    </select>
                  </div>
                  
                  <div class="calendars">
                    <!-- Current Month -->
                    <div class="calendar">
                      <div class="calendar__nav">
                        <button (click)="prevMonth()">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2"/>
                          </svg>
                        </button>
                        <span>{{ currentMonth() | date:'MMMM yyyy' }}</span>
                        <span></span>
                      </div>
                      <div class="calendar__weekdays">
                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                      </div>
                      <div class="calendar__days">
                        @for (day of getDaysInMonth(currentMonth()); track $index) {
                          @if (day) {
                            <button 
                              class="calendar__day"
                              [class.selected]="isDateSelected(day, 0)"
                              [class.today]="isToday(day, 0)"
                              [class.disabled]="isPastDate(day, 0)"
                              [disabled]="isPastDate(day, 0)"
                              (click)="selectDate(day, 0)"
                            >{{ day }}</button>
                          } @else {
                            <span class="calendar__day--empty"></span>
                          }
                        }
                      </div>
                    </div>

                    <!-- Next Month -->
                    <div class="calendar">
                      <div class="calendar__nav">
                        <span></span>
                        <span>{{ getNextMonth() | date:'MMMM yyyy' }}</span>
                        <button (click)="nextMonth()">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"/>
                          </svg>
                        </button>
                      </div>
                      <div class="calendar__weekdays">
                        <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
                      </div>
                      <div class="calendar__days">
                        @for (day of getDaysInMonth(getNextMonth()); track $index) {
                          @if (day) {
                            <button 
                              class="calendar__day"
                              [class.selected]="isDateSelected(day, 1)"
                              [class.today]="isToday(day, 1)"
                              (click)="selectDate(day, 1)"
                            >{{ day }}</button>
                          } @else {
                            <span class="calendar__day--empty"></span>
                          }
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Time Slots Section -->
                <div class="timeslots-section">
                  <div class="timeslots-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>Preferred Time Slot</span>
                  </div>
                  <div class="timeslots-grid">
                    @for (slot of timeSlots; track slot.value) {
                      <button 
                        class="timeslot"
                        [class.selected]="selectedTimeSlot() === slot.value"
                        (click)="selectTimeSlot(slot.value)"
                      >{{ slot.label }}</button>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Step 3 Accordion - Address Details -->
        <div class="accordion-step" [class.active]="currentStep() === 3" [class.completed]="isStepCompleted(3)">
          <div class="accordion-step__header" (click)="goToStep(3)">
            <div class="accordion-step__title">
              <span>Address Details</span>
            </div>
            @if (currentStep() === 3 && isAddingNewAddress()) {
              <div class="accordion-step__actions">
                <button class="btn-back-address" (click)="cancelAddAddress(); $event.stopPropagation()">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Back to Addresses
                </button>
                <button class="btn-save-address" (click)="saveNewAddress(); $event.stopPropagation()" [disabled]="!newAddressForm.valid">Save New Address</button>
              </div>
            }
            @if (isStepCompleted(3)) {
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="check-icon">
                <circle cx="12" cy="12" r="11" fill="#10B981"/>
                <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            }
          </div>
          
          @if (currentStep() === 3 && !isAddingNewAddress()) {
            <div class="accordion-step__content">
              <div class="addresses-list">
                @for (address of addresses(); track address.id) {
                  <button 
                    class="address-card"
                    [class.selected]="selectedAddressId() === address.id"
                    (click)="selectAddress(address.id)"
                  >
                    <div class="address-card__icon">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#DC2626" stroke-width="2"/>
                        <circle cx="12" cy="10" r="3" fill="#DC2626"/>
                      </svg>
                    </div>
                    <div class="address-card__content">
                      <div class="address-card__header">
                        <h4>{{ address.label }}</h4>
                        <span class="address-card__type">{{ address.houseType }}</span>
                      </div>
                      <p class="address-card__line">{{ address.line1 }}</p>
                      <p class="address-card__city">{{ address.city }}, {{ address.state }} - {{ address.pincode }} &nbsp;•&nbsp; +91 {{ address.contactNumber }}</p>
                    </div>
                  </button>
                }
              </div>

              <button class="btn-add-address" (click)="showAddAddressForm()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                Add New Address
              </button>
            </div>
          }
          
          @if (currentStep() === 3 && isAddingNewAddress()) {
            <div class="accordion-step__content">
              <form [formGroup]="newAddressForm" class="address-form">
                <!-- Service Address - Full Width -->
                <div class="form-group form-group--full">
                  <label class="form-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Service Address <span class="required">*</span>
                  </label>
                  <input type="text" formControlName="line1" class="form-input" placeholder="Enter your complete address (House/Flat no., Building, Street, Landmark)" />
                </div>

                <!-- City, State, PIN Code Row -->
                <div class="form-row form-row--3">
                  <div class="form-group">
                    <label class="form-label">City <span class="required">*</span></label>
                    <input type="text" formControlName="city" class="form-input" placeholder="e.g., Mumbai" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">State <span class="required">*</span></label>
                    <input type="text" formControlName="state" class="form-input" placeholder="e.g., Maharashtra" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">PIN Code <span class="required">*</span></label>
                    <input type="text" formControlName="pincode" class="form-input" placeholder="400001" maxlength="6" />
                  </div>
                </div>

                <!-- Contact Name, Contact Number Row -->
                <div class="form-row form-row--2">
                  <div class="form-group">
                    <label class="form-label">Contact Name <span class="required">*</span></label>
                    <input type="text" formControlName="contactName" class="form-input" placeholder="Your full name" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Contact Number <span class="required">*</span></label>
                    <div class="input-with-prefix">
                      <span class="input-prefix">+91</span>
                      <input type="tel" formControlName="contactNumber" class="form-input form-input--with-prefix" placeholder="9876543210" maxlength="10" />
                    </div>
                  </div>
                </div>

                <!-- Alternate Contact Number -->
                <div class="form-group">
                  <label class="form-label">Alternate Contact Number (Optional)</label>
                  <div class="input-with-prefix">
                    <span class="input-prefix">+91</span>
                    <input type="tel" formControlName="alternateNumber" class="form-input form-input--with-prefix" placeholder="9876543210" maxlength="10" />
                  </div>
                </div>

                <!-- House Type -->
                <div class="form-group">
                  <label class="form-label">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    House Type
                  </label>
                  <div class="chip-group">
                    @for (type of houseTypes; track type) {
                      <button type="button" class="chip" [class.selected]="selectedHouseType() === type" (click)="selectedHouseType.set(type)">{{ type }}</button>
                    }
                  </div>
                </div>

                <!-- Location Type -->
                <div class="form-group">
                  <div class="chip-group">
                    @for (type of locationTypes; track type) {
                      <button type="button" class="chip" [class.selected]="selectedLocationType() === type" (click)="selectedLocationType.set(type)">{{ type }}</button>
                    }
                  </div>
                </div>
              </form>
            </div>
          }
        </div>
      </div>
    }

    <!-- Step 4: Summary -->
    @if (currentStep() === 4) {
      <div class="summary-layout">
        <div class="summary-left">
          <!-- Expert Card with Service Type -->
          <div class="summary-card expert-summary-card">
            <div class="expert-summary-card__left">
              <div class="expert-summary-card__avatar">
                <img [src]="selectedExpert()?.photo || 'assets/images/default-avatar.png'" [alt]="selectedExpert()?.name" />
              </div>
              <div class="expert-summary-card__info">
                <div class="expert-summary-card__name-row">
                  <h4>{{ selectedExpert()?.name }}</h4>
                  @if (selectedExpert()?.isVerified) {
                    <span class="verified-badge">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12L10 17L20 7" stroke="currentColor" stroke-width="3"/>
                      </svg>
                      Verified
                    </span>
                  }
                  <span class="expert-summary-card__rate">₹{{ selectedExpert()?.hourlyRate }}/hr</span>
                </div>
                <div class="expert-summary-card__meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FFC107"/>
                  </svg>
                  {{ selectedExpert()?.rating }} ({{ selectedExpert()?.totalRatings }}), 
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="margin-left: 8px;">
                    <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  {{ selectedExpert()?.experience }} years experience
                </div>
                <div class="expert-summary-card__location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  {{ selectedExpert()?.distance?.toFixed(1) }} km away
                </div>
                <div class="expert-summary-card__skills">
                  @for (skill of selectedExpert()?.skills?.slice(0, 2); track skill) {
                    <span class="skill-tag">{{ skill }}</span>
                  }
                </div>
                <div class="expert-summary-card__languages">Languages: {{ selectedExpert()?.languages?.join(', ') }}</div>
              </div>
            </div>
            <div class="expert-summary-card__right">
              <div class="service-type-box">
                <h5>Service Type</h5>
                <div class="service-type-content">
                  <div class="service-type-icon">
                    <img [src]="selectedService()?.icon || 'assets/images/services/default-icon.png'" [alt]="selectedService()?.name" />
                  </div>
                  <span>{{ selectedService()?.name }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Schedule Details & Service Address Row -->
          <div class="summary-row">
            <div class="summary-card schedule-card">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" stroke-width="2"/>
                </svg>
                Schedule Details
              </h4>
              <div class="schedule-details">
                <div class="schedule-item">
                  <span class="schedule-label">Frequency:</span>
                  <span class="schedule-value">{{ bookingFrequency }}</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Start Date:</span>
                  <span class="schedule-value">{{ formatDate(selectedDate()) }}</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Time Slot:</span>
                  <span class="schedule-value">{{ getTimeSlotLabel(selectedTimeSlot()) }}</span>
                </div>
                <div class="schedule-item">
                  <span class="schedule-label">Duration per session:</span>
                  <span class="schedule-value">2 hours</span>
                </div>
              </div>
            </div>

            <div class="summary-card address-card-summary">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                </svg>
                Service Address
              </h4>
              <p class="address-text">{{ selectedAddress()?.line1 }}, {{ selectedAddress()?.pincode }}</p>
            </div>
          </div>

          <!-- Coupons -->
          <div class="summary-card">
            <h4>🏷️ Available Coupons</h4>
            <div class="coupons-list">
              @for (coupon of coupons(); track coupon.id) {
                <div class="coupon-card" [class.selected]="selectedCoupon()?.id === coupon.id" [class.disabled]="!isCouponEligible(coupon)">
                  <div class="coupon-card__code">{{ coupon.code }}</div>
                  <div class="coupon-card__info">
                    <strong>{{ coupon.discountType === 'percentage' ? coupon.discountValue + '% OFF' : '₹' + coupon.discountValue + ' OFF' }}</strong>
                    <p>{{ coupon.description }}</p>
                    <span class="coupon-card__min">Min. order: ₹{{ coupon.minOrderValue }}</span>
                  </div>
                  @if (!isCouponEligible(coupon)) {
                    <span class="not-eligible">Not Eligible</span>
                  } @else {
                    <button class="apply-btn" (click)="selectCouponFromList(coupon)">Apply</button>
                  }
                </div>
              }
            </div>

            <div class="coupon-input">
              <label>Have a coupon code?</label>
              <div class="coupon-input__row">
                <input type="text" [(ngModel)]="couponCode" placeholder="Enter coupon code" />
                <button class="btn-apply" (click)="applyCoupon()">APPLY</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Price Summary Sidebar -->
        <div class="summary-right">
          <div class="price-summary">
            <h4>Price Summary</h4>
            <div class="price-row">
              <span>Base Amount</span>
              <span>₹{{ baseAmount() | number:'1.2-2' }}</span>
            </div>
            <div class="price-row">
              <span>Subtotal</span>
              <span>₹{{ baseAmount() | number:'1.2-2' }}</span>
            </div>
            <div class="price-row">
              <span>GST (18%)</span>
              <span>₹{{ gstAmount() | number:'1.2-2' }}</span>
            </div>
            @if (appliedDiscount() > 0) {
              <div class="price-row discount">
                <span>Discount</span>
                <span>-₹{{ appliedDiscount() | number:'1.2-2' }}</span>
              </div>
            }
            <div class="price-row total">
              <span>Total Amount</span>
              <span>₹{{ totalAmount() | number:'1.2-2' }}</span>
            </div>

            <!-- Modify Mode: Payment Difference -->
            @if (isModifyMode()) {
              <div class="modify-payment-info">
                <div class="price-row original">
                  <span>Original Payment</span>
                  <span>₹{{ originalBookingAmount() | number:'1.2-2' }}</span>
                </div>
                @if (isAdditionalPaymentRequired()) {
                  <div class="payment-diff pay-more">
                    <div class="payment-diff__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 8V12M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                    </div>
                    <div class="payment-diff__text">
                      <strong>Additional Payment Required</strong>
                      <p>You need to pay ₹{{ paymentDifference() | number:'1.2-2' }} more for this modification.</p>
                    </div>
                  </div>
                } @else if (isRefundApplicable()) {
                  <div class="payment-diff refund">
                    <div class="payment-diff__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="payment-diff__text">
                      <strong>Refund Applicable</strong>
                      <p>₹{{ -paymentDifference() | number:'1.2-2' }} will be refunded to your original payment method within 5-7 business days.</p>
                    </div>
                  </div>
                } @else {
                  <div class="payment-diff no-change">
                    <div class="payment-diff__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                    <div class="payment-diff__text">
                      <strong>No Additional Payment</strong>
                      <p>The modified booking amount is the same as your original payment.</p>
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    }
  </main>

  <!-- Payment Modal -->
  @if (isPaymentModalOpen()) {
    <div class="modal-overlay" (click)="closePaymentModal()">
      <div class="payment-modal" (click)="$event.stopPropagation()">
        @if (!isPaymentSuccess()) {
          <div class="payment-modal__content">
            <!-- Price Summary Side -->
            <div class="payment-modal__summary">
              <h4>Price Summary</h4>
              <div class="price-row">
                <span>Base Amount</span>
                <span>₹{{ baseAmount() | number:'1.2-2' }}</span>
              </div>
              <div class="price-row">
                <span>Subtotal</span>
                <span>₹{{ baseAmount() | number:'1.2-2' }}</span>
              </div>
              <div class="price-row">
                <span>GST (18%)</span>
                <span>₹{{ gstAmount() | number:'1.2-2' }}</span>
              </div>
              <div class="price-row total">
                <span>Total Amount</span>
                <span>₹{{ totalAmount() | number:'1.2-2' }}</span>
              </div>
            </div>

            <!-- Payment Form Side -->
            <div class="payment-modal__form">
              <div class="payment-modal__header">
                <h3>PAYMENT</h3>
                <button class="close-btn" (click)="closePaymentModal()">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>

              <div class="payment-tabs">
                <button [class.active]="selectedPaymentMethod() === 'card'" (click)="selectedPaymentMethod.set('card')">Card Payment</button>
                <button [class.active]="selectedPaymentMethod() === 'upi'" (click)="selectedPaymentMethod.set('upi')">UPI Payment</button>
                <button [class.active]="selectedPaymentMethod() === 'netbanking'" (click)="selectedPaymentMethod.set('netbanking')">Net Banking</button>
              </div>

              @if (selectedPaymentMethod() === 'card') {
                <div class="card-form">
                  <div class="form-group">
                    <label>Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div class="form-group">
                    <label>Cardholder Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div class="form-row-2">
                    <div class="form-group">
                      <label>Expiry Date</label>
                      <input type="text" placeholder="MM/YY" />
                    </div>
                    <div class="form-group">
                      <label>CVV</label>
                      <input type="text" placeholder="123" maxlength="3" />
                    </div>
                  </div>
                  <p class="secure-notice">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
                      <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    Your card details are encrypted and secure
                  </p>
                </div>
              }

              <button class="btn-pay" (click)="processPayment()" [disabled]="isProcessingPayment()">
                @if (isProcessingPayment()) {
                  <span class="spinner-small"></span>
                  Processing...
                } @else {
                  Pay ₹{{ totalAmount() | number:'1.2-2' }}
                }
              </button>
            </div>
          </div>
        } @else {
          <!-- Success State -->
          <div class="payment-success">
            <button class="close-btn" (click)="closePaymentModal()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <div class="success-icon">
              <img src="assets/images/payment-success.png" alt="Success" />
            </div>
            <h3>Payment was Successful</h3>
            <p>Soon you will get confirmation on the service address and further details.</p>
            <span class="amount-paid">₹{{ totalAmount() | number:'1.2-2' }} Paid</span>
          </div>
        }
      </div>
    </div>
  }
</div>
```

---

## features/customer/book-service/book-service.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/book-service/book-service.component.scss`

```scss
// Variables
$teal-primary: #0D9488;
$teal-dark: #0F766E;
$navy: #0D436B;
$navy-dark: #0A3555;
$green-success: #10B981;
$red-error: #DC2626;
$orange-accent: #F97316;
$yellow: #FFC107;
$gray-50: #F9FAFB;
$gray-100: #F3F4F6;
$gray-200: #E5E7EB;
$gray-300: #D1D5DB;
$gray-400: #9CA3AF;
$gray-500: #6B7280;
$gray-600: #4B5563;
$gray-700: #374151;
$gray-800: #1F2937;
$gray-900: #111827;

.book-service-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #E8F5F4 0%, #F0F9F8 30%, #F5FBFA 60%, #FFFFFF 100%);
}

// Main Content - adjusted for fixed navbar with margins
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 40px;
  padding-top: calc(96px + 16px); // Navbar height + margin + spacing
  
  @media (max-width: 768px) {
    padding: 16px 20px;
    padding-top: calc(88px + 12px);
  }
}

// Header
.header {
  background: white;
  border-bottom: 1px solid $gray-200;
  position: sticky;
  top: 0;
  z-index: 100;

  &__container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;

    &-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, $teal-primary 0%, $teal-dark 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        color: white;
        font-size: 20px;
        font-weight: 700;
      }
    }

    &-text {
      font-size: 22px;
      font-weight: 700;
      color: $teal-primary;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 32px;

    &-link {
      font-size: 15px;
      font-weight: 500;
      color: $gray-700;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: $teal-primary;
      }
    }
  }
}

// User Menu
.user-menu {
  position: relative;

  &__trigger {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 12px;
    background: transparent;
    border: 1px solid $gray-200;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: $gray-50;
    }

    svg {
      transition: transform 0.2s;
      &.rotated { transform: rotate(180deg); }
    }
  }

  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    background: $teal-primary;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-size: 14px;
    font-weight: 500;
    color: $gray-800;
  }

  &__dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: white;
    border: 1px solid $gray-200;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    min-width: 180px;
    overflow: hidden;
  }

  &__item {
    display: block;
    width: 100%;
    padding: 12px 16px;
    text-align: left;
    font-size: 14px;
    color: $gray-700;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s;

    &:hover {
      background: $gray-50;
    }

    &--logout {
      color: $red-error;
      border-top: 1px solid $gray-100;
    }
  }
}

// Main Content
.main-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px;
}

// Breadcrumb
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-bottom: 16px;

  a {
    color: $gray-500;
    text-decoration: none;
    &:hover { color: $teal-primary; }
  }

  svg {
    color: $gray-400;
  }

  &__active {
    color: $gray-800;
    font-weight: 500;
  }
}

// Page Header
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: $navy;
    margin: 0 0 8px;
  }

  &__subtitle {
    font-size: 15px;
    color: $gray-500;
    margin: 0;
  }
}

.btn-next {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: $teal-primary;
  color: white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: $teal-dark;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Section Labels
.section-label {
  font-size: 16px;
  font-weight: 600;
  color: $gray-700;
  margin: 0 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &--teal {
    color: $teal-primary;
  }
}

// Services Selection
.services-section {
  margin-bottom: 40px;
}

.services-scroll {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: $gray-300;
    border-radius: 3px;
  }
}

.service-card {
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: white;
  border: 2px solid $gray-200;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 120px;

  &:hover {
    border-color: $teal-primary;
    transform: translateY(-2px);
  }

  &.selected {
    border-color: $teal-primary;
    background: rgba($teal-primary, 0.05);
  }

  &__icon {
    width: 48px;
    height: 48px;
    border: 2px solid $gray-200;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
  }

  &__name {
    font-size: 13px;
    font-weight: 500;
    color: $gray-700;
    text-align: center;
  }
}

// Experts Section
.experts-section {
  margin-top: 40px;
}

.experts-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.experts-actions {
  display: flex;
  gap: 12px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid $gray-200;
  border-radius: 10px;
  cursor: pointer;
  color: $gray-600;
  transition: all 0.2s;

  &:hover {
    border-color: $teal-primary;
    color: $teal-primary;
  }
}

.experts-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 60px;
  color: $gray-500;
}

.experts-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.expert-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: white;
  border: 2px solid $gray-200;
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;

  &:hover {
    border-color: $teal-primary;
    box-shadow: 0 4px 12px rgba($teal-primary, 0.1);
  }

  &.selected {
    border-color: $teal-primary;
    background: rgba($teal-primary, 0.02);
  }

  &__avatar {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    flex: 1;
    min-width: 0;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 6px;
  }

  &__name {
    font-size: 16px;
    font-weight: 600;
    color: $gray-800;
    margin: 0;
  }

  &__rate {
    margin-left: auto;
    font-size: 15px;
    font-weight: 600;
    color: $teal-primary;
  }

  &__meta {
    display: flex;
    gap: 8px;
    font-size: 13px;
    color: $gray-600;
    margin-bottom: 4px;
  }

  &__location {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: $gray-500;
    margin-bottom: 10px;

    svg { color: $gray-400; }
  }

  &__skills {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  &__languages {
    font-size: 12px;
    color: $gray-500;
    margin-bottom: 6px;
  }

  &__link {
    font-size: 13px;
    color: $teal-primary;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.verified-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  background: rgba($green-success, 0.1);
  color: $green-success;
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
}

.skill-tag {
  padding: 4px 10px;
  background: $gray-100;
  color: $gray-600;
  font-size: 12px;
  border-radius: 6px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

// Accordion Steps
.steps-accordion {
  margin-top: 24px;
}

.accordion-step {
  background: white;
  border-radius: 8px;
  margin-bottom: 8px;
  overflow: hidden;
  border: none;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: $gray-50;
    }
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: $teal-primary;

    .chevron {
      color: $gray-400;
    }
  }

  .check-icon {
    flex-shrink: 0;
  }

  &.completed &__title {
    color: $teal-primary;
  }

  &.active &__title {
    color: $teal-primary;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__content {
    padding: 0 20px 24px;
    border-top: 1px solid $gray-100;
    padding-top: 24px;
  }
}

// Back to Addresses Button
.btn-back-address {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: white;
  color: $gray-600;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid $gray-300;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  svg {
    flex-shrink: 0;
  }

  &:hover {
    border-color: $teal-primary;
    color: $teal-primary;
    background: rgba($teal-primary, 0.02);
  }
}

// Date & Time Selection
.datetime-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 32px;
}

.calendar-section {
  background: $gray-50;
  border-radius: 12px;
  padding: 20px;
}

.calendar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500;
  color: $gray-700;

  svg { color: $teal-primary; }
}

.frequency-select {
  margin-left: auto;
  padding: 8px 16px;
  border: 1px solid $gray-200;
  border-radius: 8px;
  font-size: 14px;
  color: $gray-700;
  background: white;
  cursor: pointer;
}

.calendars {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.calendar {
  background: white;
  border-radius: 12px;
  padding: 16px;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    span {
      font-size: 15px;
      font-weight: 600;
      color: $gray-800;
    }

    button {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $gray-100;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      color: $gray-600;

      &:hover {
        background: $gray-200;
      }
    }
  }

  &__weekdays {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 8px;

    span {
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      color: $gray-400;
      padding: 8px;
    }
  }

  &__days {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
  }

  &__day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    color: $gray-700;
    background: none;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover:not(.disabled):not(.selected) {
      background: $gray-100;
    }

    &.selected {
      background: $teal-primary;
      color: white;
    }

    &.today {
      border: 2px solid $teal-primary;
    }

    &.disabled {
      color: $gray-300;
      cursor: not-allowed;
    }

    &--empty {
      display: block;
    }
  }
}

// Time Slots
.timeslots-section {
  background: $gray-50;
  border-radius: 12px;
  padding: 20px;
}

.timeslots-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 15px;
  font-weight: 500;
  color: $gray-700;

  svg { color: $teal-primary; }
}

.timeslots-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.timeslot {
  padding: 14px 16px;
  background: white;
  border: 2px solid $gray-200;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  color: $gray-700;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: $teal-primary;
  }

  &.selected {
    border-color: $teal-primary;
    background: rgba($teal-primary, 0.05);
    color: $teal-primary;
  }
}

// Address Section
.addresses-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.address-card {
  display: flex;
  gap: 16px;
  padding: 20px;
  background: $gray-50;
  border: 2px solid transparent;
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: white;
    border-color: $gray-200;
  }

  &.selected {
    background: white;
    border-color: $teal-primary;
  }

  &__icon {
    flex-shrink: 0;
    svg {
      color: $red-error;
    }
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;

    h4 {
      margin: 0;
      font-size: 15px;
      font-weight: 600;
      color: $gray-800;
    }
  }

  &__type {
    padding: 3px 10px;
    background: rgba($teal-primary, 0.1);
    color: $teal-primary;
    font-size: 11px;
    font-weight: 600;
    border-radius: 4px;
  }

  &__line {
    margin: 0 0 4px;
    font-size: 14px;
    color: $gray-600;
  }

  &__city {
    margin: 0;
    font-size: 13px;
    color: $gray-500;
  }
}

.btn-add-address {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  background: none;
  border: 2px dashed $gray-300;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  color: $teal-primary;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: $teal-primary;
    background: rgba($teal-primary, 0.02);
  }
}

// Address Form
.address-form {
  max-width: 100%;
}

.form-group {
  margin-bottom: 24px;

  &--full {
    width: 100%;
  }
}

.form-row {
  display: grid;
  gap: 20px;
  margin-bottom: 24px;

  &--3 {
    grid-template-columns: repeat(3, 1fr);
  }

  &--2 {
    grid-template-columns: repeat(2, 1fr);
  }

  .form-group {
    margin-bottom: 0;
  }
}

.form-label {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  color: $gray-700;

  svg { color: $gray-400; }

  .required {
    color: $red-error;
  }
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid $gray-200;
  border-radius: 8px;
  font-size: 14px;
  color: $gray-800;
  background: white;
  transition: all 0.2s;

  &::placeholder {
    color: $gray-400;
  }

  &:focus {
    outline: none;
    border-color: $teal-primary;
    box-shadow: 0 0 0 3px rgba($teal-primary, 0.1);
  }

  &--with-prefix {
    padding-left: 52px;
  }
}

.input-with-prefix {
  position: relative;
  display: flex;
  align-items: center;

  .input-prefix {
    position: absolute;
    left: 16px;
    font-size: 14px;
    color: $gray-500;
    background: $gray-100;
    padding: 4px 8px;
    border-radius: 4px;
    z-index: 1;
    left: 8px;
  }

  .form-input--with-prefix {
    padding-left: 65px;
  }
}

.chip-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.chip {
  padding: 12px 32px;
  background: white;
  border: 1px solid $gray-200;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: $gray-600;
  cursor: pointer;
  transition: all 0.2s;
  min-width: 100px;
  text-align: center;

  &:hover {
    border-color: $teal-primary;
  }

  &.selected {
    border-color: $teal-primary;
    color: $teal-primary;
    background: white;
  }
}

.btn-save-address {
  padding: 12px 28px;
  background: white;
  color: $gray-700;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid $gray-200;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: $teal-primary;
    color: $teal-primary;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

// Summary Layout
.summary-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 24px;
  margin-top: 24px;
}

.summary-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.summary-right {
  position: sticky;
  top: 96px;
  height: fit-content;
}

.summary-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E9EAEB;

  h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 16px;
    font-size: 15px;
    font-weight: 600;
    color: $gray-800;

    svg {
      color: $gray-500;
    }
  }
}

.summary-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

// Expert Summary Card - Matching Figma exactly
.expert-summary-card {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
  background: white;
  border-radius: 16px;
  border: 1px solid #E9EAEB;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__left {
    display: flex;
    gap: 16px;
    flex: 1;
  }

  &__avatar {
    width: 90px;
    height: 90px;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    flex: 1;
  }

  &__name-row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 6px;

    h4 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: $gray-800;
    }
  }

  &__rate {
    padding: 6px 14px;
    background: #E8F5F4;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    color: $teal-primary;
    margin-left: auto;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 13px;
    color: $gray-600;
    margin-bottom: 4px;

    svg {
      flex-shrink: 0;
    }
  }

  &__location {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: $gray-500;
    margin-bottom: 10px;

    svg {
      color: $gray-400;
    }
  }

  &__skills {
    display: flex;
    gap: 8px;
    margin-bottom: 8px;
  }

  &__languages {
    font-size: 12px;
    color: $gray-500;
  }

  &__right {
    flex-shrink: 0;
  }
}

.service-type-box {
  background: $gray-50;
  border-radius: 12px;
  padding: 20px;
  min-width: 140px;
  text-align: center;

  h5 {
    margin: 0 0 16px;
    font-size: 14px;
    font-weight: 600;
    color: $gray-700;
  }
}

.service-type-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.service-type-icon {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $gray-200;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
}

// Schedule Card
.schedule-card {
  .schedule-details {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid $gray-100;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:first-child {
    padding-top: 0;
  }
}

.schedule-label {
  font-size: 14px;
  color: $gray-500;
}

.schedule-value {
  font-size: 14px;
  font-weight: 500;
  color: $gray-800;
}

// Address Card Summary
.address-card-summary {
  .address-text {
    margin: 0;
    font-size: 14px;
    color: $gray-600;
    line-height: 1.6;
  }
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid $gray-100;
  font-size: 14px;

  &:last-child {
    border-bottom: none;
  }

  span:first-child {
    color: $gray-500;
  }

  span:last-child {
    font-weight: 500;
    color: $gray-800;
  }
}

// Coupons
.coupons-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.coupon-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: $gray-50;
  border: 2px solid transparent;
  border-radius: 12px;
  transition: all 0.2s;

  &.selected {
    border-color: $green-success;
    background: rgba($green-success, 0.05);
  }

  &.disabled {
    opacity: 0.6;
  }

  &__code {
    padding: 10px 14px;
    background: linear-gradient(135deg, $teal-primary, $teal-dark);
    color: white;
    font-size: 13px;
    font-weight: 700;
    border-radius: 8px;
    letter-spacing: 1px;
  }

  &__info {
    flex: 1;

    strong {
      display: block;
      font-size: 14px;
      color: $gray-800;
      margin-bottom: 2px;
    }

    p {
      margin: 0 0 4px;
      font-size: 13px;
      color: $gray-600;
    }
  }

  &__min {
    font-size: 12px;
    color: $gray-400;
  }

  .not-eligible {
    font-size: 12px;
    color: $red-error;
    font-weight: 500;
  }

  .apply-btn {
    padding: 8px 20px;
    background: $teal-primary;
    color: white;
    font-size: 13px;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: $teal-dark;
    }
  }
}

.coupon-input {
  border-top: 1px solid $gray-100;
  padding-top: 20px;

  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    color: $gray-700;
  }

  &__row {
    display: flex;
    gap: 12px;

    input {
      flex: 1;
      padding: 12px 16px;
      border: 1px solid $gray-200;
      border-radius: 8px;
      font-size: 14px;

      &:focus {
        outline: none;
        border-color: $teal-primary;
      }
    }
  }
}

.btn-apply {
  padding: 12px 24px;
  background: $navy;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: $navy-dark;
  }
}

// Price Summary
.price-summary {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #E9EAEB;

  h4 {
    margin: 0 0 20px;
    font-size: 16px;
    font-weight: 700;
    color: $navy;
  }
}

.price-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  color: $gray-600;
  border-bottom: 1px solid $gray-100;

  &:last-of-type {
    border-bottom: none;
  }

  span:last-child {
    font-weight: 500;
    color: $gray-800;
  }

  &.discount {
    span:last-child {
      color: $green-success;
    }
  }

  &.total {
    padding-top: 16px;
    margin-top: 8px;
    border-top: 1px solid $gray-200;
    border-bottom: none;
    font-weight: 700;

    span {
      color: $gray-900;
    }

    span:last-child {
      color: $teal-primary;
      font-size: 18px;
    }
  }
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  font-size: 14px;
  color: $gray-600;
  border-bottom: 1px solid $gray-100;

  &:last-child {
    border-bottom: none;
  }

  &.discount {
    color: $green-success;
  }

  &.total {
    margin-top: 8px;
    padding-top: 16px;
    border-top: 2px solid $gray-200;
    font-size: 18px;
    font-weight: 700;
    color: $gray-900;
  }

  &.original {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px dashed $gray-300;
    color: $gray-500;
    
    span:last-child {
      text-decoration: line-through;
    }
  }
}

// Modify Mode Payment Difference
.modify-payment-info {
  margin-top: 8px;
}

.payment-diff {
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 12px;
  margin-top: 16px;

  &__icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__text {
    strong {
      display: block;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 4px;
    }

    p {
      margin: 0;
      font-size: 13px;
      line-height: 1.5;
    }
  }

  &.pay-more {
    background: #FEF3C7;
    border: 1px solid #F59E0B;

    .payment-diff__icon {
      background: #FDE68A;
      color: #D97706;
    }

    .payment-diff__text {
      strong {
        color: #B45309;
      }
      p {
        color: #92400E;
      }
    }
  }

  &.refund {
    background: #D1FAE5;
    border: 1px solid $green-success;

    .payment-diff__icon {
      background: #A7F3D0;
      color: #059669;
    }

    .payment-diff__text {
      strong {
        color: #047857;
      }
      p {
        color: #065F46;
      }
    }
  }

  &.no-change {
    background: #E0F2FE;
    border: 1px solid #0EA5E9;

    .payment-diff__icon {
      background: #BAE6FD;
      color: #0284C7;
    }

    .payment-diff__text {
      strong {
        color: #0369A1;
      }
      p {
        color: #075985;
      }
    }
  }
}

// Payment Modal
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.payment-modal {
  background: white;
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;

  &__content {
    display: grid;
    grid-template-columns: 280px 1fr;
  }

  &__summary {
    background: $gray-50;
    padding: 32px;
    border-radius: 20px 0 0 20px;

    h4 {
      margin: 0 0 24px;
      font-size: 18px;
      font-weight: 700;
      color: $navy;
    }
  }

  &__form {
    padding: 32px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    h3 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: $navy;
    }
  }

  .close-btn {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $gray-100;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    color: $gray-600;

    &:hover {
      background: $gray-200;
    }
  }
}

.payment-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;

  button {
    flex: 1;
    padding: 12px;
    background: $gray-100;
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 500;
    color: $gray-600;
    cursor: pointer;
    transition: all 0.2s;

    &.active {
      background: $teal-primary;
      color: white;
    }

    &:hover:not(.active) {
      background: $gray-200;
    }
  }
}

.card-form {
  .form-group {
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 6px;
    font-size: 13px;
    font-weight: 500;
    color: $gray-700;
  }

  input {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid $gray-200;
    border-radius: 10px;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: $teal-primary;
    }
  }
}

.secure-notice {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0 0;
  font-size: 12px;
  color: $gray-500;

  svg { color: $green-success; }
}

.btn-pay {
  width: 100%;
  padding: 16px;
  background: $teal-primary;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: $teal-dark;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

// Payment Success
.payment-success {
  text-align: center;
  padding: 60px 40px;
  position: relative;

  .close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .success-icon {
    width: 140px;
    height: 140px;
    margin: 0 auto 32px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  h3 {
    margin: 0 0 12px;
    font-size: 26px;
    font-weight: 700;
    color: $gray-900;
  }

  p {
    margin: 0 0 24px;
    font-size: 15px;
    color: $gray-500;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }

  .amount-paid {
    display: inline-block;
    padding: 12px 32px;
    background: rgba($green-success, 0.1);
    color: $green-success;
    font-size: 20px;
    font-weight: 700;
    border-radius: 12px;
  }
}

// Spinner
.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid $gray-200;
  border-top-color: $teal-primary;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.spinner-small {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

// Responsive
@media (max-width: 1024px) {
  .summary-layout {
    grid-template-columns: 1fr;
  }

  .summary-right {
    position: static;
  }

  .experts-grid {
    grid-template-columns: 1fr;
  }

  .datetime-container {
    grid-template-columns: 1fr;
  }

  .calendars {
    grid-template-columns: 1fr;
  }

  .payment-modal__content {
    grid-template-columns: 1fr;
  }

  .payment-modal__summary {
    border-radius: 20px 20px 0 0;
  }
}

@media (max-width: 768px) {
  .header__container {
    padding: 0 16px;
  }

  .main-content {
    padding: 16px;
  }

  .page-header {
    flex-direction: column;
    gap: 16px;
  }

  .page-header__title {
    font-size: 22px;
  }

  .btn-next {
    width: 100%;
    justify-content: center;
  }

  .summary-row {
    grid-template-columns: 1fr;
  }

  .form-row-3, .form-row-2 {
    grid-template-columns: 1fr;
  }
}
```

---

## features/customer/book-service/book-service.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/book-service/book-service.component.ts`

```ts
import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { BookingService, BookingStatus, PaymentStatus, Service, Booking } from '../../../core/services/booking.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { PaymentModalComponent } from '../../../shared/components/payment-modal/payment-modal.component';
import { PaymentSuccessModalComponent } from '../../../shared/components/payment-success-modal/payment-success-modal.component';

interface Expert {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  totalRatings: number;
  experience: number;
  skills: string[];
  languages: string[];
  hourlyRate: number;
  isVerified: boolean;
  distance?: number;
}

interface Address {
  id: string;
  label: string;
  houseType: string;
  line1: string;
  city: string;
  state: string;
  pincode: string;
  contactName: string;
  contactNumber: string;
}

interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: string;
  discountValue: number;
  minOrderValue: number;
  maxDiscount?: number;
}

@Component({
  selector: 'app-book-service',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule, NavbarComponent, PaymentModalComponent, PaymentSuccessModalComponent],
  templateUrl: './book-service.component.html',
  styleUrl: './book-service.component.scss'
})
export class BookServiceComponent implements OnInit {
  // Mode: 'new' for new booking, 'modify' for modifying existing booking
  isModifyMode = signal(false);
  originalBookingId = signal<string | null>(null);
  originalBookingAmount = signal<number>(0);

  // Signals for state management
  currentStep = signal(1);
  isUserMenuOpen = signal(false);
  
  // Step 1: Service & Expert
  services = signal<Service[]>([]);
  selectedServiceId = signal<string | null>(null);
  experts = signal<Expert[]>([]);
  selectedExpert = signal<Expert | null>(null);
  isLoadingExperts = signal(false);

  // Step 2: Date & Time
  currentMonth = signal(new Date());
  selectedDate = signal<Date | null>(null);
  selectedTimeSlot = signal<string | null>(null);
  bookingFrequency = 'Once'; // Using regular property for ngModel binding

  timeSlots = [
    { label: '6:00 AM - 9:00 AM', value: '06:00-09:00' },
    { label: '9:00 AM - 12:00 PM', value: '09:00-12:00' },
    { label: '12:00 PM - 3:00 PM', value: '12:00-15:00' },
    { label: '3:00 PM - 6:00 PM', value: '15:00-18:00' },
    { label: '6:00 PM - 9:00 PM', value: '18:00-21:00' }
  ];

  // Step 3: Address
  addresses = signal<Address[]>([]);
  selectedAddressId = signal<string | null>(null);
  isAddingNewAddress = signal(false);
  newAddressForm: FormGroup;
  selectedHouseType = signal<string>('2 BHK');
  selectedLocationType = signal<string>('Home');

  houseTypes = ['1 BHK', '2 BHK', '3 BHK', '4 BHK'];
  locationTypes = ['Home', 'Office', 'Others'];

  // Step 4: Summary & Coupons
  coupons = signal<Coupon[]>([]);
  selectedCoupon = signal<Coupon | null>(null);
  couponCode = '';

  // Payment
  isPaymentModalOpen = signal(false);
  isPaymentSuccess = signal(false);
  isProcessingPayment = signal(false);
  selectedPaymentMethod = signal<'card' | 'upi' | 'netbanking'>('card');

  // Computed
  userName = computed(() => this.authService.currentUser()?.name || 'User');
  
  selectedService = computed(() => {
    const services = this.services();
    const id = this.selectedServiceId();
    return services.find(s => s.id === id);
  });

  selectedAddress = computed(() => {
    const addresses = this.addresses();
    const id = this.selectedAddressId();
    return addresses.find(a => a.id === id);
  });

  baseAmount = computed(() => {
    const expert = this.selectedExpert();
    return expert ? expert.hourlyRate * 2 : 500; // 2 hours default
  });

  gstAmount = computed(() => this.baseAmount() * 0.18);

  appliedDiscount = computed(() => {
    const coupon = this.selectedCoupon();
    if (!coupon) return 0;
    if (coupon.discountType === 'percentage') {
      const discount = this.baseAmount() * (coupon.discountValue / 100);
      return coupon.maxDiscount ? Math.min(discount, coupon.maxDiscount) : discount;
    }
    return coupon.discountValue;
  });

  totalAmount = computed(() => {
    return this.baseAmount() + this.gstAmount() - this.appliedDiscount();
  });

  // Modify mode computed properties
  paymentDifference = computed(() => {
    if (!this.isModifyMode()) return 0;
    return this.totalAmount() - this.originalBookingAmount();
  });

  isAdditionalPaymentRequired = computed(() => this.paymentDifference() > 0);
  isRefundApplicable = computed(() => this.paymentDifference() < 0);

  constructor(
    private authService: AuthService,
    private bookingService: BookingService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.newAddressForm = this.fb.group({
      line1: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      contactName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      alternateNumber: ['']
    });
  }

  ngOnInit(): void {
    this.loadServices();
    this.loadAddresses();
    this.loadCoupons();
    this.checkModifyMode();
  }

  checkModifyMode(): void {
    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'modify' && params['bookingId']) {
        this.isModifyMode.set(true);
        this.originalBookingId.set(params['bookingId']);
        
        // Get booking data from navigation state
        const navigation = this.router.getCurrentNavigation();
        const state = navigation?.extras?.state || history.state;
        
        if (state?.booking) {
          this.populateFromBooking(state.booking);
        } else {
          // Fetch booking data from service if not in state
          this.fetchAndPopulateBooking(params['bookingId']);
        }
      }
    });
  }

  populateFromBooking(booking: any): void {
    // Store original amount for comparison
    this.originalBookingAmount.set(booking.totalAmount || 0);

    // Set service
    if (booking.serviceId) {
      this.selectedServiceId.set(booking.serviceId);
      this.loadExperts(booking.serviceId);
    }

    // Wait for experts to load, then select the expert
    const expertId = booking.expertId || history.state?.expertId;
    if (expertId) {
      // Try multiple times as experts load async
      const selectExpert = (retries: number) => {
        const expert = this.experts().find(e => e.id === expertId);
        if (expert) {
          this.selectedExpert.set(expert);
        } else if (retries > 0) {
          setTimeout(() => selectExpert(retries - 1), 300);
        }
      };
      setTimeout(() => selectExpert(5), 500);
    }

    // Set date and time
    if (booking.date) {
      this.selectedDate.set(new Date(booking.date));
    }
    if (booking.timeSlot) {
      this.selectedTimeSlot.set(booking.timeSlot);
    }
    if (booking.frequency) {
      this.bookingFrequency = booking.frequency.charAt(0).toUpperCase() + booking.frequency.slice(1);
    }

    // Set address
    if (booking.addressId) {
      this.selectedAddressId.set(booking.addressId);
    }

    // Set coupon
    if (booking.couponCode) {
      this.couponCode = booking.couponCode;
      setTimeout(() => {
        this.applyCoupon();
      }, 300);
    }

    // In modify mode, go directly to summary step (step 4)
    // All steps are now accessible for editing
    setTimeout(() => {
      this.currentStep.set(4);
    }, 800);
  }

  fetchAndPopulateBooking(bookingId: string): void {
    this.bookingService.getBookingById(bookingId).subscribe({
      next: (booking) => {
        if (booking) {
          this.populateFromBooking(booking);
        }
      },
      error: () => {
        console.error('Could not fetch booking for modification');
        this.router.navigate(['/customer/bookings']);
      }
    });
  }

  loadServices(): void {
    this.bookingService.getServices().subscribe({
      next: (services) => {
        this.services.set(services);
        if (services.length > 0 && !this.selectedServiceId()) {
          this.selectService(services[0].id);
        }
      }
    });
  }

  loadAddresses(): void {
    const user = this.authService.currentUser();
    if (user) {
      this.bookingService.getCustomerAddresses(user.id).subscribe({
        next: (addresses) => this.addresses.set(addresses)
      });
    }
  }

  loadCoupons(): void {
    this.bookingService.getAvailableCoupons().subscribe({
      next: (coupons) => this.coupons.set(coupons)
    });
  }

  selectService(serviceId: string): void {
    this.selectedServiceId.set(serviceId);
    this.selectedExpert.set(null);
    this.loadExperts(serviceId);
  }

  loadExperts(serviceId: string): void {
    this.isLoadingExperts.set(true);
    const service = this.services().find(s => s.id === serviceId);
    if (service) {
      this.bookingService.getExpertsByService(service.name).subscribe({
        next: (experts) => {
          const mappedExperts: Expert[] = experts.map((e: any) => ({
            ...e,
            distance: Math.random() * 5 + 1
          }));
          this.experts.set(mappedExperts);
          this.isLoadingExperts.set(false);
        },
        error: () => this.isLoadingExperts.set(false)
      });
    }
  }

  selectExpert(expert: Expert): void {
    this.selectedExpert.set(expert);
  }

  // Calendar methods
  getDaysInMonth(date: Date): (number | null)[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(i);
    return days;
  }

  getNextMonth(): Date {
    const current = this.currentMonth();
    return new Date(current.getFullYear(), current.getMonth() + 1, 1);
  }

  prevMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  }

  nextMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  }

  selectDate(day: number, monthOffset: number): void {
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    const date = new Date(baseMonth.getFullYear(), baseMonth.getMonth(), day);
    this.selectedDate.set(date);
  }

  isDateSelected(day: number, monthOffset: number): boolean {
    const selected = this.selectedDate();
    if (!selected) return false;
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    return selected.getDate() === day && 
           selected.getMonth() === baseMonth.getMonth() && 
           selected.getFullYear() === baseMonth.getFullYear();
  }

  isToday(day: number, monthOffset: number): boolean {
    const today = new Date();
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    return today.getDate() === day && 
           today.getMonth() === baseMonth.getMonth() && 
           today.getFullYear() === baseMonth.getFullYear();
  }

  isPastDate(day: number, monthOffset: number): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const baseMonth = monthOffset === 0 ? this.currentMonth() : this.getNextMonth();
    const date = new Date(baseMonth.getFullYear(), baseMonth.getMonth(), day);
    return date < today;
  }

  selectTimeSlot(slot: string): void {
    this.selectedTimeSlot.set(slot);
  }

  // Address methods
  selectAddress(addressId: string): void {
    this.selectedAddressId.set(addressId);
  }

  showAddAddressForm(): void {
    this.isAddingNewAddress.set(true);
  }

  cancelAddAddress(): void {
    this.isAddingNewAddress.set(false);
    this.newAddressForm.reset();
  }

  saveNewAddress(): void {
    if (this.newAddressForm.valid) {
      const user = this.authService.currentUser();
      if (user) {
        const newAddress = {
          ...this.newAddressForm.value,
          userId: user.id,
          label: this.selectedLocationType(),
          houseType: this.selectedHouseType(),
          locationType: this.selectedLocationType()
        };
        
        this.bookingService.addAddress(newAddress).subscribe({
          next: (address) => {
            this.addresses.set([...this.addresses(), address]);
            this.selectedAddressId.set(address.id);
            this.isAddingNewAddress.set(false);
            this.newAddressForm.reset();
          }
        });
      }
    }
  }

  // Coupon methods
  isCouponEligible(coupon: Coupon): boolean {
    return this.baseAmount() >= coupon.minOrderValue;
  }

  selectCouponFromList(coupon: Coupon): void {
    if (this.isCouponEligible(coupon)) {
      this.selectedCoupon.set(coupon);
      this.couponCode = coupon.code;
    }
  }

  applyCoupon(): void {
    if (!this.couponCode) return;
    const coupon = this.coupons().find(c => c.code.toLowerCase() === this.couponCode.toLowerCase());
    if (coupon && this.isCouponEligible(coupon)) {
      this.selectedCoupon.set(coupon);
    }
  }

  // Navigation
  isStepComplete(step: number): boolean {
    switch (step) {
      case 1: return !!this.selectedServiceId() && !!this.selectedExpert();
      case 2: return !!this.selectedDate() && !!this.selectedTimeSlot();
      case 3: return !!this.selectedAddressId();
      case 4: return true;
      default: return false;
    }
  }

  // Check if a step is completed (used for showing tick marks)
  isStepCompleted(step: number): boolean {
    // In modify mode, all steps are considered completed initially
    if (this.isModifyMode()) {
      return this.isStepComplete(step);
    }
    // In normal mode, only steps before current are completed
    return step < this.currentStep() && this.isStepComplete(step);
  }

  nextStep(): void {
    if (this.currentStep() < 4 && this.isStepComplete(this.currentStep())) {
      this.currentStep.set(this.currentStep() + 1);
    }
  }

  goToStep(step: number): void {
    // In modify mode, allow going to any step (all steps are pre-filled)
    if (this.isModifyMode()) {
      this.currentStep.set(step);
      return;
    }
    // In normal mode, only allow going back or to completed steps
    if (step <= this.currentStep() || this.isStepComplete(step - 1)) {
      this.currentStep.set(step);
    }
  }

  // Payment
  openPaymentModal(): void {
    this.isPaymentModalOpen.set(true);
    this.isPaymentSuccess.set(false);
  }

  closePaymentModal(): void {
    this.isPaymentModalOpen.set(false);
    if (this.isPaymentSuccess()) {
      // Redirect to bookings page after successful payment/update
      this.router.navigate(['/customer/bookings']);
    }
  }

  processPayment(): void {
    this.isProcessingPayment.set(true);
    
    setTimeout(() => {
      const user = this.authService.currentUser();
      if (!user) return;

      const bookingData: Partial<Booking> = {
        customerId: user.id,
        expertId: this.selectedExpert()?.id,
        serviceId: this.selectedServiceId() || undefined,
        serviceName: this.selectedService()?.name,
        addressId: this.selectedAddressId() || undefined,
        date: this.selectedDate()?.toISOString(),
        timeSlot: this.selectedTimeSlot() || undefined,
        duration: 2,
        frequency: this.bookingFrequency.toLowerCase() as 'once' | 'weekly' | 'monthly',
        baseAmount: this.baseAmount(),
        gstAmount: this.gstAmount(),
        discountAmount: this.appliedDiscount(),
        totalAmount: this.totalAmount(),
        couponCode: this.selectedCoupon()?.code,
        status: BookingStatus.PENDING,
        paymentStatus: PaymentStatus.PAID
      };

      if (this.isModifyMode() && this.originalBookingId()) {
        // Update existing booking
        this.bookingService.updateBooking(this.originalBookingId()!, bookingData).subscribe({
          next: () => {
            this.isProcessingPayment.set(false);
            this.isPaymentSuccess.set(true);
          },
          error: () => {
            this.isProcessingPayment.set(false);
            alert('Failed to update booking. Please try again.');
          }
        });
      } else {
        // Create new booking
        this.bookingService.createBooking(bookingData).subscribe({
          next: () => {
            this.isProcessingPayment.set(false);
            this.isPaymentSuccess.set(true);
          },
          error: () => {
            this.isProcessingPayment.set(false);
            alert('Payment failed. Please try again.');
          }
        });
      }
    }, 2000);
  }

  // Helpers
  formatDate(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  getTimeSlotLabel(value: string | null): string {
    const slot = this.timeSlots.find(s => s.value === value);
    return slot ? slot.label : '';
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen.set(!this.isUserMenuOpen());
  }

  logout(): void {
    this.authService.logout();
  }
}
```

---

## features/customer/dashboard/customer-dashboard.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/dashboard/customer-dashboard.component.html`

```html
<!-- Customer Dashboard -->
<div class="dashboard-page">
  <!-- Shared Navbar -->
  <app-navbar [pageType]="'customer'" />

  <!-- Main Content -->
  <main class="main-content">
    <!-- Welcome Section -->
    <section class="welcome-section">
      <div class="welcome-text">
        <span class="welcome-label">Welcome back,</span>
        <h1 class="welcome-name">{{ userName().toUpperCase() }}!</h1>
      </div>
      <a routerLink="/customer/book-service" class="btn-book-service">
        BOOK SERVICE
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </a>
    </section>

    <!-- Upcoming Bookings -->
    <section class="bookings-section">
      <h2 class="section-title">Upcoming Bookings</h2>
      
      <div class="bookings-carousel">
        <div class="bookings-track">
          @if (isLoadingBookings()) {
            <div class="loading-placeholder">Loading bookings...</div>
          } @else if (upcomingBookings().length === 0) {
            <!-- Show message when no bookings -->
            <div class="no-bookings-message">
              <p>No upcoming bookings yet.</p>
              <button class="book-now-btn" (click)="bookService()">Book a Service</button>
            </div>
          } @else {
            @for (booking of upcomingBookings(); track booking.id) {
              <div class="booking-card">
                <div class="booking-card__header">
                  <div class="booking-card__icon">
                    <img src="assets/images/services/cleaning-icon.png" alt="Service" />
                  </div>
                  <span class="booking-card__price" [class.paid]="booking.paymentStatus === 'PAID'">{{ booking.paymentStatus === 'PAID' ? 'PAID' : '₹' + booking.totalAmount + '/- to pay' }}</span>
                </div>
                <div class="booking-card__details">
                  <div class="booking-card__service-name">{{ booking.serviceName }}</div>
                  <div class="booking-card__date">{{ formatBookingDate(booking.date) }}</div>
                  <div class="booking-card__time">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    {{ formatTimeSlot(booking.timeSlot) }}, booked for {{ booking.duration }}hrs
                  </div>
                  <div class="booking-card__address">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    201, Manjari Khurd, Pune - 143505
                  </div>
                </div>
                <div class="booking-card__actions">
                  <button class="booking-card__link" (click)="viewBookingDetails(booking)">View Details</button>
                  @if (booking.status === 'PENDING') {
                    <button class="booking-card__link" (click)="modifyBooking(booking)">Modify Booking</button>
                  }
                </div>
              </div>
            }
          }
        </div>
        <button class="carousel-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Popular Services -->
    <section class="popular-section">
      <h2 class="section-title">Popular Services</h2>
      <div class="popular-grid">
        @for (service of popularServices; track service.name + $index) {
          <div class="popular-card" (click)="bookService(service.id)">
            <div class="popular-card__image">
              <img [src]="service.image" [alt]="service.name" />
            </div>
            <span class="popular-card__name">{{ service.name }}</span>
          </div>
        }
      </div>
    </section>

    <!-- Featured Services -->
    <section class="featured-section">
      <h2 class="section-title section-title--teal">Featured Services</h2>
      <div class="featured-grid">
        @for (service of featuredServices; track service.name) {
          <div class="featured-card">
            <div class="featured-card__image">
              <img [src]="service.image" [alt]="service.name" />
              <span class="featured-card__price">₹ {{ service.price }}/hr</span>
            </div>
            <div class="featured-card__content">
              <h3 class="featured-card__title">{{ service.name }}</h3>
              <p class="featured-card__desc">{{ service.description }}</p>
              <span class="featured-card__discount">{{ service.discount }}</span>
              <button class="featured-card__btn" (click)="bookService(service.id)">BOOK SERVICE</button>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- FAQs -->
    <section class="faq-section">
      <h2 class="section-title section-title--teal">FAQs</h2>
      <div class="faq-list">
        @for (faq of faqs(); track faq.id; let i = $index) {
          <div class="faq-item" [class.expanded]="expandedFaq() === i">
            <button class="faq-question" (click)="toggleFaq(i)">
              <span>{{ faq.question }}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                @if (expandedFaq() === i) {
                  <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                } @else {
                  <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                }
              </svg>
            </button>
            @if (expandedFaq() === i) {
              <div class="faq-answer">{{ faq.answer }}</div>
            }
          </div>
        }
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__column">
          <h4>About Modimal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Support System</a>
          <a href="#">Terms & Condition</a>
          <a href="#">Copyright Notice</a>
        </div>
        <div class="footer__column">
          <h4>Help & Support</h4>
          <a href="#">Orders & Shipping</a>
          <a href="#">Returns & Refunds</a>
          <a href="#">FAQs</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="footer__column">
          <h4>Join Up</h4>
          <a routerLink="/register/expert">Join As Expert</a>
        </div>
      </div>
      <div class="footer__copyright">
        <span>©</span> 2025 HouseMate. All Rights Reserved.
      </div>
    </footer>
  </main>
</div>
```

---

## features/customer/dashboard/customer-dashboard.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/dashboard/customer-dashboard.component.scss`

```scss
// Customer Dashboard Styles - Matching Figma exactly

// Variables
$navy: #0D436B;
$teal-primary: #0D9488;

.dashboard-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #E8F5F4 0%, #F0F9F8 30%, #F5FBFA 60%, #FFFFFF 100%);
}

// Main Content - adjusted for fixed navbar with margins
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 40px;
  padding-top: calc(96px + 1rem); // Navbar height + margin + spacing
  
  @media (max-width: 768px) {
    padding: 1rem 20px;
    padding-top: calc(88px + 1rem);
  }
}

// User Menu
.user-menu {
  position: relative;

  &__trigger {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;

    svg {
      transition: transform 0.2s;
      &.rotated {
        transform: rotate(180deg);
      }
    }
  }

  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    background: #ddd;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-weight: 500;
    font-size: 0.9rem;
  }

  &__dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    min-width: 160px;
    overflow: hidden;
    z-index: 100;
  }

  &__item {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: left;
    border: none;
    background: none;
    color: #333;
    font-size: 0.875rem;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #f5f5f5;
    }

    &--logout {
      color: #dc2626;
      border-top: 1px solid #eee;
    }
  }
}

// Main Content
.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem); // Navbar height + spacing
}

// Welcome Section
.welcome-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.welcome-text {
  .welcome-label {
    display: block;
    color: #0D9488;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .welcome-name {
    color: #0D436B;
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
  }
}

.btn-book-service {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #0D436B;
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.5px;
  transition: background 0.2s;

  &:hover {
    background: #0a3555;
  }
}

// Section Title
.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a2e;
  margin: 0 0 1.25rem;

  &--teal {
    color: #0D9488;
  }
}

// Bookings Section
.bookings-section {
  margin-bottom: 2.5rem;
}

.bookings-carousel {
  position: relative;
  display: flex;
  align-items: center;
}

.bookings-track {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  flex: 1;

  &::-webkit-scrollbar {
    display: none;
  }
}

.loading-placeholder {
  padding: 2rem;
  color: #666;
}

.no-bookings-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  text-align: center;
  color: #666;
  width: 100%;
  
  p {
    margin-bottom: 1rem;
    font-size: 1rem;
  }
  
  .book-now-btn {
    background: $teal-primary;
    color: white;
    border: none;
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover {
      background: darken($teal-primary, 5%);
    }
  }
}

.booking-card {
  flex: 0 0 320px;
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  &__icon {
    width: 56px;
    height: 56px;
    background: #FFF9E6;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }
  }

  &__price {
    background: #F0F4F8;
    color: #333;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.375rem 0.75rem;
    border-radius: 4px;
  }

  &__details {
    margin-bottom: 1rem;
  }

  &__date {
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 0.5rem;
  }

  &__time, &__address {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-size: 0.8rem;
    margin-bottom: 0.25rem;

    svg {
      flex-shrink: 0;
      color: #888;
    }
  }

  &__actions {
    display: flex;
    gap: 1.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid #f0f0f0;
  }

  &__link {
    color: #0D9488;
    font-size: 0.8rem;
    font-weight: 500;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;

    &:hover {
      text-decoration: underline;
    }
  }
}

.carousel-arrow {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: white;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
}

// Popular Services
.popular-section {
  margin-bottom: 2.5rem;
}

.popular-grid {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
}

.popular-card {
  flex: 0 0 160px;
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }

  &__image {
    width: 100px;
    height: 100px;
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  &__name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #1a1a2e;
  }
}

// Featured Services
.featured-section {
  margin-bottom: 2.5rem;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.featured-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);

  &__image {
    position: relative;
    height: 200px;
    background: linear-gradient(180deg, #E8F4FA 0%, #D4EBF5 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    overflow: hidden;

    img {
      max-height: 180px;
      object-fit: contain;
    }
  }

  &__price {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #0D436B;
    color: white;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.375rem 0.75rem;
    border-radius: 6px;
  }

  &__content {
    padding: 1.25rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    color: #1a1a2e;
    margin: 0 0 0.5rem;
  }

  &__desc {
    font-size: 0.8rem;
    color: #666;
    line-height: 1.5;
    margin: 0 0 0.75rem;
  }

  &__discount {
    display: block;
    color: #0D9488;
    font-size: 0.75rem;
    font-weight: 500;
    font-style: italic;
    margin-bottom: 1rem;
  }

  &__btn {
    width: 100%;
    background: white;
    color: #0D436B;
    border: 1.5px solid #0D436B;
    padding: 0.75rem;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #0D436B;
      color: white;
    }
  }
}

// FAQs
.faq-section {
  margin-bottom: 3rem;
}

.faq-list {
  background: white;
  border-radius: 12px;
  overflow: hidden;
}

.faq-item {
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0D9488;

  svg {
    flex-shrink: 0;
    color: #333;
  }
}

.faq-answer {
  padding: 0 1.5rem 1.25rem;
  color: #555;
  font-size: 0.875rem;
  line-height: 1.6;
}

// Footer
.footer {
  background: #F8FAFB;
  padding: 3rem 0 1.5rem;
  margin-top: 2rem;

  &__container {
    display: flex;
    justify-content: flex-start;
    gap: 6rem;
    margin-bottom: 2rem;
  }

  &__column {
    h4 {
      font-size: 0.875rem;
      font-weight: 600;
      color: #1a1a2e;
      margin: 0 0 1rem;
    }

    a {
      display: block;
      color: #666;
      font-size: 0.8rem;
      text-decoration: none;
      margin-bottom: 0.5rem;

      &:hover {
        color: #0D436B;
      }
    }
  }

  &__copyright {
    text-align: center;
    color: #888;
    font-size: 0.8rem;
    padding-top: 1.5rem;
    border-top: 1px solid #eee;
  }
}

// Responsive
@media (max-width: 1024px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .header {
    padding: 1rem;
  }

  .main-content {
    padding: 1rem;
  }

  .welcome-section {
    flex-direction: column;
    gap: 1rem;
  }

  .featured-grid {
    grid-template-columns: 1fr;
  }

  .footer__container {
    flex-wrap: wrap;
    gap: 2rem;
  }
}
```

---

## features/customer/dashboard/customer-dashboard.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/dashboard/customer-dashboard.component.ts`

```ts
import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { BookingService } from '../../../core/services/booking.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { BookingActions, Booking } from '../../../core/store/booking/booking.actions';
import { selectUser } from '../../../core/store/auth/auth.selectors';
import { selectUpcomingBookings, selectBookingLoading } from '../../../core/store/booking/booking.selectors';

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly bookingService = inject(BookingService);
  private readonly router = inject(Router);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();

  // Signals
  isUserMenuOpen = signal(false);
  upcomingBookings = signal<Booking[]>([]);
  isLoadingBookings = signal(true);
  faqs = signal<FAQ[]>([]);
  expandedFaq = signal<number | null>(null);

  // User info from NgRx store
  userName = computed(() => {
    return this.currentUserName();
  });
  private currentUserName = signal('User');

  // Hardcoded data for popular services
  popularServices = [
    { id: 'srv-001', name: 'Cleaning', image: 'assets/images/services/cleaning.png' },
    { id: 'srv-002', name: 'Cooking', image: 'assets/images/services/cooking.png' },
    { id: 'srv-003', name: 'Gardening', image: 'assets/images/services/gardening.png' },
    { id: 'srv-001', name: 'Cleaning', image: 'assets/images/services/cleaning.png' },
    { id: 'srv-002', name: 'Cooking', image: 'assets/images/services/cooking.png' }
  ];

  // Hardcoded data for featured services
  featuredServices = [
    {
      id: 'srv-001',
      name: 'Deep House Cleaning',
      image: 'assets/images/services/cleaning-featured.png',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: 'Extra 15% off if you book it for a month'
    },
    {
      id: 'srv-002',
      name: 'Cooking Service',
      image: 'assets/images/services/cooking-featured.png',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: 'Extra 15% off if you book it for a month'
    },
    {
      id: 'srv-003',
      name: 'Gardening',
      image: 'assets/images/services/gardening-featured.png',
      price: 150,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      discount: 'Extra 15% off if you book it for a month'
    }
  ];

  ngOnInit(): void {
    // Subscribe to user from store
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (user) {
        this.currentUserName.set(user.name || 'User');
        // Dispatch action to load bookings
        this.store.dispatch(BookingActions.loadBookings({ customerId: user.id }));
      }
    });

    // Subscribe to upcoming bookings from store
    this.store.select(selectUpcomingBookings).pipe(
      takeUntil(this.destroy$)
    ).subscribe(bookings => {
      this.upcomingBookings.set(bookings);
    });

    // Subscribe to loading state
    this.store.select(selectBookingLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => {
      this.isLoadingBookings.set(loading);
    });

    this.loadFaqs();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadFaqs(): void {
    this.bookingService.getFaqs().subscribe({
      next: (faqs) => {
        this.faqs.set(faqs);
      }
    });
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen.set(!this.isUserMenuOpen());
  }

  toggleFaq(index: number): void {
    if (this.expandedFaq() === index) {
      this.expandedFaq.set(null);
    } else {
      this.expandedFaq.set(index);
    }
  }

  formatBookingDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${day} ${month}, ${weekday}`;
  }

  formatTimeSlot(timeSlot: string): string {
    if (!timeSlot) return '';
    const [start] = timeSlot.split('-');
    const [hours, minutes] = start.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  }

  viewBookingDetails(booking: Booking): void {
    this.router.navigate(['/customer/bookings'], { 
      queryParams: { bookingId: booking.id, action: 'view' } 
    });
  }

  modifyBooking(booking: Booking): void {
    this.router.navigate(['/customer/book-service'], {
      queryParams: {
        mode: 'modify',
        bookingId: booking.id
      },
      state: { 
        booking: booking,
        expertId: booking.expertId
      }
    });
  }

  bookService(serviceId?: string): void {
    if (serviceId) {
      this.router.navigate(['/customer/book-service'], { queryParams: { service: serviceId } });
    } else {
      this.router.navigate(['/customer/book-service']);
    }
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
```

---

## features/customer/my-bookings/my-bookings.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/my-bookings/my-bookings.component.html`

```html
<!-- My Bookings Page - Matching Figma Exactly -->
<div class="my-bookings-page">
  <!-- Navbar -->
  <app-navbar [pageType]="'customer'" />

  <!-- Main Content -->
  <main class="main-content">
    <div class="content-wrapper">
      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <a routerLink="/customer/dashboard">Home</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2"/>
        </svg>
        <span class="breadcrumb__active">My Bookings</span>
      </nav>

      <!-- Page Header -->
      <div class="page-header">
        <div class="page-header__left">
          <h1 class="page-header__title">My Bookings</h1>
          <p class="page-header__subtitle">Track and manage all your service bookings</p>
        </div>
        <div class="page-header__actions">
          <button class="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <button class="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button 
          class="filter-tab" 
          [class.active]="activeTab() === 'all'"
          (click)="setActiveTab('all')">
          All Bookings
          <span class="filter-tab__count">{{ tabCounts().all }}</span>
        </button>
        <button 
          class="filter-tab filter-tab--upcoming" 
          [class.active]="activeTab() === 'upcoming'"
          (click)="setActiveTab('upcoming')">
          Upcoming
          <span class="filter-tab__count">{{ tabCounts().upcoming }}</span>
        </button>
        <button 
          class="filter-tab filter-tab--completed" 
          [class.active]="activeTab() === 'completed'"
          (click)="setActiveTab('completed')">
          Completed
          <span class="filter-tab__count">{{ tabCounts().completed }}</span>
        </button>
        <button 
          class="filter-tab filter-tab--cancelled" 
          [class.active]="activeTab() === 'cancelled'"
          (click)="setActiveTab('cancelled')">
          Cancelled
          <span class="filter-tab__count">{{ tabCounts().cancelled }}</span>
        </button>
        <button 
          class="filter-tab filter-tab--rejected" 
          [class.active]="activeTab() === 'rejected'"
          (click)="setActiveTab('rejected')">
          Rejected
          <span class="filter-tab__count">{{ tabCounts().rejected }}</span>
        </button>
      </div>

      <!-- Loading State -->
      @if (isLoading()) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Loading your bookings...</p>
        </div>
      } @else if (filteredBookings().length === 0) {
        <div class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#D1D5DB" stroke-width="2"/>
            <path d="M16 2V6M8 2V6M3 10H21" stroke="#D1D5DB" stroke-width="2"/>
          </svg>
          <h3>No bookings found</h3>
          <p>You don't have any {{ activeTab() !== 'all' ? activeTab() : '' }} bookings yet.</p>
          <a routerLink="/customer/book-service" class="btn-primary">Book a Service</a>
        </div>
      } @else {
        <!-- Bookings Grid -->
        <div class="bookings-grid">
          @for (booking of filteredBookings(); track booking.id) {
            <div class="booking-card" [class]="'booking-card--' + booking.status">
              <!-- Card Header -->
              <div class="booking-card__header">
                <div class="booking-card__service">
                  <div class="booking-card__icon">
                    <img [src]="booking.serviceIcon || 'assets/images/services/default-icon.png'" [alt]="booking.serviceName" />
                  </div>
                  <div class="booking-card__info">
                    <h3 class="booking-card__name">{{ booking.serviceName }}</h3>
                    <span class="booking-card__id">Booking ID: {{ booking.id }}</span>
                  </div>
                </div>
                <div class="booking-card__status-area">
                  <span class="status-badge" [class]="getStatusClass(booking.status)">
                    <span class="status-dot"></span>
                    {{ getStatusLabel(booking.status) }}
                  </span>
                  <span class="payment-badge" [class]="getPaymentClass(booking)">
                    {{ getPaymentLabel(booking) }}
                  </span>
                </div>
              </div>

              <!-- Card Body -->
              <div class="booking-card__body">
                <!-- Schedule Info -->
                <div class="schedule-info">
                  <div class="schedule-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                      <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>{{ formatDate(booking.scheduledDate || '') }}</span>
                  </div>
                  <div class="schedule-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <span>{{ formatTime(booking.scheduledTime || '') }}, booked for {{ booking.duration }}hrs</span>
                  </div>
                  <div class="schedule-item">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    <span>{{ booking.address }}</span>
                  </div>
                </div>

                <!-- Expert Info (if available) -->
                @if (booking.expert) {
                  <div class="expert-info">
                    <span class="expert-info__label">Service Expert</span>
                    <div class="expert-info__content">
                      <div class="expert-info__left">
                        <div class="expert-info__avatar">
                          <img [src]="booking.expert.avatar || 'assets/images/default-avatar.png'" [alt]="booking.expert.name" />
                        </div>
                        <div class="expert-info__details">
                          <span class="expert-info__name">{{ booking.expert.name }}</span>
                          <span class="expert-info__phone">{{ booking.expert.phone | phoneFormat }}</span>
                        </div>
                      </div>
                      <button class="btn-call" (click)="callExpert(booking.expert.phone)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.36 21.02 19.74 21 19.13 20.91C15.16 20.33 11.46 18.68 8.44 16.13C5.58 13.71 3.31 10.67 1.97 7.28C1.68 6.57 1.45 5.84 1.28 5.1C1.17 4.6 1.57 4.12 2.08 4.07L5.08 3.77C5.54 3.73 5.95 4.02 6.08 4.46L6.98 7.71C7.1 8.12 6.96 8.56 6.63 8.82L4.85 10.23C6.61 13.29 9.09 15.77 12.14 17.53L13.55 15.75C13.81 15.42 14.25 15.28 14.66 15.4L17.91 16.3C18.35 16.43 18.64 16.84 18.6 17.3L18.3 20.3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Call
                      </button>
                    </div>
                  </div>
                }

                <!-- Rating Section (for completed) -->
                @if (booking.status === 'completed') {
                  <div class="rating-section">
                    <span class="rating-label">Your Rating:</span>
                    <div class="rating-stars">
                      @for (star of [1, 2, 3, 4, 5]; track star) {
                        <button 
                          class="star-btn" 
                          [class.filled]="booking.userRating && star <= booking.userRating"
                          (click)="rateBooking(booking, star)">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                          </svg>
                        </button>
                      }
                    </div>
                  </div>
                }

                <!-- Cancellation Reason -->
                @if (booking.status === 'cancelled' && booking.cancellationReason) {
                  <div class="reason-box reason-box--cancelled">
                    <span class="reason-label">Cancellation Reason:</span>
                    <p>{{ booking.cancellationReason }}</p>
                  </div>
                }

                <!-- Rejection Reason -->
                @if (booking.status === 'rejected' && booking.rejectionReason) {
                  <div class="reason-box reason-box--rejected">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                      <path d="M12 8V12M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <div>
                      <span class="reason-label">Rejection Reason:</span>
                      <p>{{ booking.rejectionReason }}</p>
                    </div>
                  </div>
                }
              </div>

              <!-- Card Footer -->
              <div class="booking-card__footer">
                <span class="booked-date">Booked on {{ (booking.bookedDate || '') | dateFormat }}</span>
                <div class="booking-card__actions">
                  <button class="btn-link" (click)="viewDetails(booking)">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" stroke-width="2"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    View Details
                  </button>
                  @if (booking.status === 'pending' && booking.canModify) {
                    <button class="btn-link btn-link--primary" (click)="modifyBooking(booking)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M18.5 2.5C18.89 2.11 19.42 1.89 19.98 1.89C20.54 1.89 21.07 2.11 21.46 2.5C21.85 2.89 22.07 3.42 22.07 3.98C22.07 4.54 21.85 5.07 21.46 5.46L12 14.92L8 16L9.08 12L18.5 2.5Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                      Modify Booking
                    </button>
                  }
                  @if (booking.status === 'completed') {
                    <button class="btn-link btn-link--primary" (click)="bookAgain(booking)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C14.12 3 16.07 3.74 17.62 4.97" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M21 3V9H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Book Again
                    </button>
                  }
                  @if (booking.status === 'cancelled' || booking.status === 'rejected') {
                    <button class="btn-link btn-link--primary" (click)="rebookService(booking)">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C14.12 3 16.07 3.74 17.62 4.97" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M21 3V9H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      Rebook Service
                    </button>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  </main>

  <!-- View Details Modal -->
  @if (isViewDetailsOpen() && selectedBooking()) {
    <div class="modal-overlay" (click)="closeViewDetails()">
      <div class="view-details-modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h2>Booking Details</h2>
          <button class="close-btn" (click)="closeViewDetails()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
        
        <div class="modal-body">
          <!-- Service & Status -->
          <div class="detail-section">
            <div class="detail-row service-row">
              <div class="service-info">
                <div class="service-icon">
                  <img [src]="selectedBooking()?.serviceIcon || 'assets/images/services/default-icon.png'" alt="Service" />
                </div>
                <div>
                  <h3>{{ selectedBooking()?.serviceName }}</h3>
                  <span class="booking-id">Booking ID: {{ selectedBooking()?.id }}</span>
                </div>
              </div>
              <span class="status-badge" [class]="getStatusClass(selectedBooking()?.status || '')">
                <span class="status-dot"></span>
                {{ getStatusLabel(selectedBooking()?.status || '') }}
              </span>
            </div>
          </div>

          <!-- Schedule Details -->
          <div class="detail-section">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M16 2V6M8 2V6M3 10H21" stroke="currentColor" stroke-width="2"/>
              </svg>
              Schedule Details
            </h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Date:</span>
                <span class="value">{{ formatDate(selectedBooking()?.scheduledDate || '') }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Time Slot:</span>
                <span class="value">{{ formatTime(selectedBooking()?.scheduledTime || '') }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Duration:</span>
                <span class="value">{{ selectedBooking()?.duration }} hours</span>
              </div>
            </div>
          </div>

          <!-- Service Address -->
          <div class="detail-section">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
              Service Address
            </h4>
            <p class="address-text">{{ selectedBooking()?.address }}</p>
          </div>

          <!-- Expert Details -->
          @if (selectedBooking()?.expert) {
            <div class="detail-section">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" stroke-width="2"/>
                </svg>
                Service Expert
              </h4>
              <div class="expert-detail">
                <div class="expert-avatar">
                  <img [src]="selectedBooking()?.expert?.avatar || 'assets/images/default-avatar.png'" alt="Expert" />
                </div>
                <div class="expert-info-detail">
                  <span class="name">{{ selectedBooking()?.expert?.name }}</span>
                  <span class="phone">{{ selectedBooking()?.expert?.phone }}</span>
                </div>
              </div>
            </div>
          }

          <!-- OTP Verification Code - Always show if OTP exists and booking not completed/cancelled -->
          @if (selectedBooking()?.otp) {
            <div class="detail-section otp-section">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="2"/>
                  <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" stroke-width="2"/>
                </svg>
                Verification OTP
              </h4>
              <div class="otp-display">
                <p class="otp-info">Share this OTP with the service expert to start the work</p>
                <div class="otp-code">
                  @for (digit of selectedBooking()!.otp!.split(''); track $index) {
                    <span class="otp-digit">{{ digit }}</span>
                  }
                </div>
                <p class="otp-warning">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18A2 2 0 003.54 21H20.46A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  Do not share this OTP until the expert arrives
                </p>
              </div>
            </div>
          }

          <!-- Payment Details -->
          <div class="detail-section">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="4" width="22" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M1 10H23" stroke="currentColor" stroke-width="2"/>
              </svg>
              Payment Details
            </h4>
            <div class="detail-grid">
              <div class="detail-item">
                <span class="label">Total Amount:</span>
                <span class="value amount">₹{{ selectedBooking()?.totalAmount }}</span>
              </div>
              <div class="detail-item">
                <span class="label">Payment Status:</span>
                <span class="value" [class]="'payment-status--' + selectedBooking()?.paymentStatus">
                  {{ (selectedBooking()?.paymentStatus === 'paid' || selectedBooking()?.paymentStatus === 'completed') ? 'Paid' : selectedBooking()?.paymentStatus === 'refunded' ? 'Refunded' : 'Pending' }}
                </span>
              </div>
              @if (selectedBooking()?.otp) {
                <div class="detail-item">
                  <span class="label">Service OTP:</span>
                  <span class="value otp-value">{{ selectedBooking()?.otp }}</span>
                </div>
              }
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-secondary" (click)="closeViewDetails()">Close</button>
          @if (selectedBooking()?.status === 'pending' && selectedBooking()?.canModify) {
            <button class="btn-primary" (click)="modifyBooking(selectedBooking()!); closeViewDetails()">Modify Booking</button>
          }
        </div>
      </div>
    </div>
  }
</div>
```

---

## features/customer/my-bookings/my-bookings.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/my-bookings/my-bookings.component.scss`

```scss
/* My Bookings Page Styles - Matching Figma Exactly */

// Variables
$navy: #0D436B;
$teal-primary: #0D9488;
$teal-light: #E8F5F4;
$green-success: #10B981;
$green-light: #D1FAE5;
$orange-warning: #F97316;
$orange-light: #FFF7ED;
$red-error: #DC2626;
$red-light: #FEF2F2;
$blue-info: #3B82F6;
$blue-light: #EFF6FF;
$gray-50: #F9FAFB;
$gray-100: #F3F4F6;
$gray-200: #E5E7EB;
$gray-300: #D1D5DB;
$gray-400: #9CA3AF;
$gray-500: #6B7280;
$gray-600: #4B5563;
$gray-700: #374151;
$gray-800: #1F2937;
$gray-900: #111827;

.my-bookings-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #E8F5F4 0%, #F0F9F8 30%, #F5FBFA 60%, #FFFFFF 100%);
}

.main-content {
  padding-top: 96px; // Navbar height (64px) + top margin (16px) + extra spacing (16px)
  
  @media (max-width: 768px) {
    padding-top: 88px;
  }
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 40px;
  
  @media (max-width: 768px) {
    padding: 16px 20px;
  }
}

// Breadcrumb
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  
  a {
    color: $gray-500;
    text-decoration: none;
    
    &:hover {
      color: $teal-primary;
    }
  }
  
  svg {
    color: $gray-400;
  }
  
  &__active {
    color: $teal-primary;
    font-weight: 500;
  }
}

// Page Header
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  
  &__title {
    margin: 0 0 4px;
    font-size: 28px;
    font-weight: 700;
    color: $navy;
  }
  
  &__subtitle {
    margin: 0;
    font-size: 14px;
    color: $gray-500;
  }
  
  &__actions {
    display: flex;
    gap: 12px;
  }
}

.icon-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid $gray-200;
  border-radius: 10px;
  color: $gray-600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: $gray-50;
    border-color: $gray-300;
    color: $gray-800;
  }
}

// Filter Tabs
.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  padding: 4px;
  background: white;
  border-radius: 12px;
  border: 1px solid $gray-200;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
}

.filter-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: $gray-600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  
  &:hover {
    background: $gray-50;
  }
  
  &.active {
    background: $gray-100;
    color: $gray-800;
  }
  
  &__count {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    background: $gray-200;
    border-radius: 10px;
    font-size: 11px;
    font-weight: 600;
    color: $gray-600;
  }
  
  &--upcoming {
    &.active, &:hover {
      .filter-tab__count {
        background: $green-light;
        color: $green-success;
      }
    }
  }
  
  &--completed {
    &.active, &:hover {
      .filter-tab__count {
        background: $blue-light;
        color: $blue-info;
      }
    }
  }
  
  &--cancelled {
    &.active, &:hover {
      .filter-tab__count {
        background: $orange-light;
        color: $orange-warning;
      }
    }
  }
  
  &--rejected {
    &.active, &:hover {
      .filter-tab__count {
        background: $red-light;
        color: $red-error;
      }
    }
  }
}

// Loading & Empty States
.loading-state, .empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  
  h3 {
    margin: 16px 0 8px;
    font-size: 18px;
    font-weight: 600;
    color: $gray-800;
  }
  
  p {
    margin: 0 0 24px;
    font-size: 14px;
    color: $gray-500;
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid $gray-200;
  border-top-color: $teal-primary;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn-primary {
  padding: 12px 24px;
  background: $navy;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background: darken($navy, 10%);
  }
}

// Bookings Grid
.bookings-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

// Booking Card
.booking-card {
  background: white;
  border-radius: 16px;
  border: 1px solid $gray-200;
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
  
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px 20px 0;
  }
  
  &__service {
    display: flex;
    gap: 14px;
  }
  
  &__icon {
    width: 48px;
    height: 48px;
    background: $teal-light;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    img {
      width: 28px;
      height: 28px;
      object-fit: contain;
    }
  }
  
  &__info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  &__name {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: $gray-800;
  }
  
  &__id {
    font-size: 12px;
    color: $gray-400;
  }
  
  &__status-area {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;
  }
  
  &__body {
    padding: 16px 20px;
  }
  
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-top: 1px solid $gray-100;
    background: $gray-50;
  }
  
  &__actions {
    display: flex;
    gap: 16px;
  }
}

// Status Badge
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  
  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
}

.status--upcoming {
  background: $green-light;
  color: $green-success;
  
  .status-dot {
    background: $green-success;
  }
}

.status--completed {
  background: $blue-light;
  color: $blue-info;
  
  .status-dot {
    background: $blue-info;
  }
}

.status--cancelled {
  background: $orange-light;
  color: $orange-warning;
  
  .status-dot {
    background: $orange-warning;
  }
}

.status--rejected {
  background: $red-light;
  color: $red-error;
  
  .status-dot {
    background: $red-error;
  }
}

// Payment Badge
.payment-badge {
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
}

.payment--pending {
  background: $teal-light;
  color: $teal-primary;
}

.payment--paid {
  background: $green-light;
  color: $green-success;
}

.payment--refunded {
  color: $gray-500;
  font-weight: 500;
}

// Schedule Info
.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.schedule-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: $gray-600;
  
  svg {
    flex-shrink: 0;
    color: $gray-400;
    margin-top: 1px;
  }
}

// Expert Info
.expert-info {
  padding: 14px;
  background: $gray-50;
  border-radius: 10px;
  margin-bottom: 12px;
  
  &__label {
    display: block;
    font-size: 11px;
    font-weight: 500;
    color: $gray-500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
  }
  
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  &__left {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    background: $gray-200;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__details {
    display: flex;
    flex-direction: column;
  }
  
  &__name {
    font-size: 14px;
    font-weight: 600;
    color: $gray-800;
  }
  
  &__phone {
    font-size: 12px;
    color: $gray-500;
  }
}

.btn-call {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: white;
  border: 1px solid $gray-200;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  color: $gray-700;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    color: $gray-500;
  }
  
  &:hover {
    background: $gray-50;
    border-color: $gray-300;
  }
}

// Rating Section
.rating-section {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: #FFFBEB;
  border-radius: 10px;
  margin-bottom: 12px;
}

.rating-label {
  font-size: 13px;
  font-weight: 500;
  color: $gray-700;
}

.rating-stars {
  display: flex;
  gap: 4px;
}

.star-btn {
  padding: 2px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: $gray-300;
  transition: color 0.2s ease;
  
  &.filled {
    color: #FFC107;
  }
  
  &:hover {
    color: #FFC107;
  }
}

// Reason Box
.reason-box {
  padding: 12px 14px;
  border-radius: 10px;
  margin-bottom: 12px;
  
  &--cancelled {
    background: $orange-light;
    border: 1px solid rgba($orange-warning, 0.2);
  }
  
  &--rejected {
    display: flex;
    gap: 10px;
    background: $red-light;
    border: 1px solid rgba($red-error, 0.2);
    
    svg {
      flex-shrink: 0;
      color: $red-error;
      margin-top: 2px;
    }
  }
  
  .reason-label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
  }
  
  &--cancelled .reason-label {
    color: $orange-warning;
  }
  
  &--rejected .reason-label {
    color: $red-error;
  }
  
  p {
    margin: 0;
    font-size: 13px;
    color: $gray-600;
    line-height: 1.4;
  }
}

// Footer
.booked-date {
  font-size: 12px;
  color: $gray-400;
}

.btn-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 13px;
  font-weight: 500;
  color: $gray-500;
  cursor: pointer;
  transition: color 0.2s ease;
  
  svg {
    color: inherit;
  }
  
  &:hover {
    color: $gray-700;
  }
  
  &--primary {
    color: $teal-primary;
    
    &:hover {
      color: darken($teal-primary, 10%);
    }
  }
}

// View Details Modal
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.view-details-modal {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalSlide 0.3s ease;
}

@keyframes modalSlide {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid $gray-100;
  
  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: $navy;
  }
}

.close-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 10px;
  color: $gray-500;
  cursor: pointer;
  
  &:hover {
    background: $gray-100;
    color: $gray-700;
  }
}

.modal-body {
  padding: 24px;
  overflow-y: auto;
  flex: 1;
}

.detail-section {
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  h4 {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 14px;
    font-size: 15px;
    font-weight: 600;
    color: $gray-800;
    
    svg {
      color: $gray-500;
    }
  }
}

.service-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: $gray-50;
  border-radius: 12px;
}

.service-info {
  display: flex;
  gap: 14px;
  align-items: center;
  
  h3 {
    margin: 0 0 2px;
    font-size: 16px;
    font-weight: 600;
    color: $gray-800;
  }
  
  .booking-id {
    font-size: 12px;
    color: $gray-400;
  }
}

.service-icon {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid $gray-200;
  
  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  
  .label {
    font-size: 12px;
    color: $gray-500;
  }
  
  .value {
    font-size: 14px;
    font-weight: 500;
    color: $gray-800;
    
    &.amount {
      color: $teal-primary;
      font-weight: 600;
    }
  }
}

.address-text {
  margin: 0;
  font-size: 14px;
  color: $gray-600;
  line-height: 1.5;
}

.expert-detail {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 14px;
  background: $gray-50;
  border-radius: 12px;
}

.expert-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.expert-info-detail {
  display: flex;
  flex-direction: column;
  gap: 2px;
  
  .name {
    font-size: 15px;
    font-weight: 600;
    color: $gray-800;
  }
  
  .phone {
    font-size: 13px;
    color: $gray-500;
  }
}

.payment-status--completed {
  color: $green-success;
}

.payment-status--refunded {
  color: $orange-warning;
}

.payment-status--pending {
  color: $teal-primary;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 24px;
  border-top: 1px solid $gray-100;
  background: $gray-50;
}

.btn-secondary {
  padding: 10px 20px;
  background: white;
  border: 1px solid $gray-300;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: $gray-700;
  cursor: pointer;
  
  &:hover {
    background: $gray-50;
  }
}

// OTP Section Styles
.otp-section {
  background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
  border-radius: 12px;
  padding: 16px !important;
  border: 1px solid #F59E0B;
  
  h4 {
    color: #92400E !important;
  }
}

.otp-display {
  text-align: center;
  
  .otp-info {
    margin: 0 0 16px;
    font-size: 14px;
    color: #92400E;
  }
  
  .otp-code {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 16px;
  }
  
  .otp-digit {
    width: 44px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border: 2px solid #F59E0B;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 700;
    color: #92400E;
    box-shadow: 0 2px 4px rgba(245, 158, 11, 0.2);
  }
  
  .otp-warning {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin: 0;
    font-size: 12px;
    color: #B45309;
    
    svg {
      flex-shrink: 0;
      color: #F59E0B;
    }
  }
}

// OTP Value in Payment Details
.otp-value {
  font-weight: 700 !important;
  font-size: 18px !important;
  color: #F59E0B !important;
  letter-spacing: 3px;
  background: #FEF3C7;
  padding: 4px 12px;
  border-radius: 6px;
  border: 1px solid #F59E0B;
}
```

---

## features/customer/my-bookings/my-bookings.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/customer/my-bookings/my-bookings.component.ts`

```ts
import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter } from 'rxjs';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { BookingService } from '../../../core/services/booking.service';
import { DateFormatPipe } from '../../../shared/pipes/date-format.pipe';
import { PhoneFormatPipe } from '../../../shared/pipes/phone-format.pipe';
import { NotificationService } from '../../../core/services/notification.service';
import { BookingActions, Booking, BookingStatus, PaymentStatus } from '../../../core/store/booking/booking.actions';
import { selectAllBookings, selectBookingLoading } from '../../../core/store/booking/booking.selectors';
import { selectUser } from '../../../core/store/auth/auth.selectors';
import { catchError, map, switchMap } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

type TabType = 'all' | 'upcoming' | 'completed' | 'cancelled' | 'rejected';

interface BookingWithExpert {
  id: string;
  serviceName?: string;
  serviceId?: string;
  status: string;
  totalAmount: number;
  paymentStatus: string;
  duration?: number;
  address?: string;
  date?: string;
  timeSlot?: string;
  scheduledDate?: string;
  scheduledTime?: string;
  expert?: {
    id: string;
    name: string;
    phone: string;
    avatar?: string;
  };
  serviceIcon?: string;
  userRating?: number;
  cancellationReason?: string;
  rejectionReason?: string;
  bookedDate?: string;
  canModify?: boolean;
  customerId?: string;
  expertId?: string;
  addressId?: string;
  frequency?: string;
  baseAmount?: number;
  gstAmount?: number;
  discountAmount?: number;
  couponCode?: string;
  otp?: string;
  originalBooking?: any;
}

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, NavbarComponent, DateFormatPipe, PhoneFormatPipe],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly bookingService = inject(BookingService);
  private readonly notification = inject(NotificationService);
  private readonly destroy$ = new Subject<void>();
  
  activeTab = signal<TabType>('all');
  searchQuery = signal('');
  isLoading = signal(true);
  allBookings = signal<BookingWithExpert[]>([]);
  isViewDetailsOpen = signal(false);
  selectedBooking = signal<BookingWithExpert | null>(null);

  tabCounts = computed(() => {
    const bookings = this.allBookings();
    return {
      all: bookings.length,
      upcoming: bookings.filter(b => b.status === 'pending' || b.status === 'confirmed').length,
      completed: bookings.filter(b => b.status === 'completed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
      rejected: bookings.filter(b => b.status === 'rejected').length
    };
  });

  filteredBookings = computed(() => {
    const bookings = this.allBookings();
    const tab = this.activeTab();
    const query = this.searchQuery().toLowerCase();
    
    let filtered = bookings;
    
    switch (tab) {
      case 'upcoming':
        filtered = bookings.filter(b => b.status === 'pending' || b.status === 'confirmed');
        break;
      case 'completed':
        filtered = bookings.filter(b => b.status === 'completed');
        break;
      case 'cancelled':
        filtered = bookings.filter(b => b.status === 'cancelled');
        break;
      case 'rejected':
        filtered = bookings.filter(b => b.status === 'rejected');
        break;
    }
    
    if (query) {
      filtered = filtered.filter(b => 
        b.serviceName?.toLowerCase().includes(query) ||
        b.id.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  });

  ngOnInit(): void {
    this.loadBookings();
    
    // Handle query params for viewing specific booking from dashboard
    this.route.queryParams.pipe(
      takeUntil(this.destroy$)
    ).subscribe(params => {
      if (params['bookingId'] && params['action'] === 'view') {
        // Wait for bookings to load, then open the details modal
        setTimeout(() => {
          const booking = this.allBookings().find(b => b.id === params['bookingId']);
          if (booking) {
            this.viewDetails(booking);
          }
        }, 500);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadBookings(): void {
    this.isLoading.set(true);
    
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (!user) {
        this.isLoading.set(false);
        return;
      }
      this.store.dispatch(BookingActions.loadBookings({ customerId: user.id }));
    });

    this.store.select(selectAllBookings).pipe(
      takeUntil(this.destroy$),
      switchMap(bookings => {
        if (bookings.length === 0) {
          return of([]);
        }
        
        const bookingWithExperts$ = bookings.map(booking => {
          const statusStr = (booking.status as string)?.toUpperCase() || 'PENDING';
          // Only allow modify if status is PENDING (expert hasn't accepted yet)
          const canModifyBooking = statusStr === 'PENDING';
          
          if (booking.expertId) {
            return this.bookingService.getExpertById(booking.expertId).pipe(
              map(expert => ({
                ...booking,
                id: booking.id,
                serviceName: booking.serviceName,
                serviceId: booking.serviceId,
                status: statusStr.toLowerCase(),
                scheduledDate: booking.date,
                scheduledTime: booking.timeSlot,
                duration: booking.duration || 2,
                address: 'Address details',
                totalAmount: booking.totalAmount,
                paymentStatus: ((booking.paymentStatus as string) || 'PENDING').toLowerCase(),
                expert: expert ? {
                  id: expert.id,
                  name: expert.name,
                  phone: '+91 9876543210',
                  avatar: expert.photo
                } : undefined,
                otp: booking.otp || (booking as any).otp,
                bookedDate: booking.createdAt,
                canModify: canModifyBooking,
                originalBooking: booking
              } as BookingWithExpert)),
              catchError(() => of({
                ...booking,
                id: booking.id,
                serviceName: booking.serviceName,
                serviceId: booking.serviceId,
                status: statusStr.toLowerCase(),
                scheduledDate: booking.date,
                scheduledTime: booking.timeSlot,
                duration: booking.duration || 2,
                address: 'Address details',
                totalAmount: booking.totalAmount,
                paymentStatus: ((booking.paymentStatus as string) || 'PENDING').toLowerCase(),
                otp: booking.otp || (booking as any).otp,
                bookedDate: booking.createdAt,
                canModify: canModifyBooking,
                originalBooking: booking
              } as BookingWithExpert))
            );
          }
          return of({
            ...booking,
            id: booking.id,
            serviceName: booking.serviceName,
            serviceId: booking.serviceId,
            status: statusStr.toLowerCase(),
            scheduledDate: booking.date,
            scheduledTime: booking.timeSlot,
            duration: booking.duration || 2,
            address: 'Address details',
            totalAmount: booking.totalAmount,
            paymentStatus: ((booking.paymentStatus as string) || 'PENDING').toLowerCase(),
            otp: booking.otp || (booking as any).otp,
            bookedDate: booking.createdAt,
            canModify: canModifyBooking,
            originalBooking: booking
          } as BookingWithExpert);
        });
        
        return forkJoin(bookingWithExperts$);
      })
    ).subscribe({
      next: (bookings) => {
        this.allBookings.set(bookings);
        this.isLoading.set(false);
      },
      error: () => {
        this.notification.error('Error', 'Failed to load bookings. Please try again.');
        this.allBookings.set([]);
        this.isLoading.set(false);
      }
    });
  }

  setActiveTab(tab: TabType): void {
    this.activeTab.set(tab);
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'pending':
      case 'confirmed':
        return 'status--upcoming';
      case 'completed':
        return 'status--completed';
      case 'cancelled':
        return 'status--cancelled';
      case 'rejected':
        return 'status--rejected';
      default:
        return '';
    }
  }

  getStatusLabel(status: string): string {
    switch (status) {
      case 'pending':
        return 'Upcoming';
      case 'confirmed':
        return 'Upcoming';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      case 'rejected':
        return 'Rejected';
      default:
        return status;
    }
  }

  getPaymentLabel(booking: BookingWithExpert): string {
    const status = booking.paymentStatus?.toLowerCase();
    if (status === 'paid' || status === 'completed') {
      return 'PAID';
    } else if (status === 'refunded') {
      return 'REFUNDED';
    } else {
      return '₹' + booking.totalAmount + ' to pay';
    }
  }

  getPaymentClass(booking: BookingWithExpert): string {
    const status = booking.paymentStatus?.toLowerCase();
    if (status === 'paid' || status === 'completed') {
      return 'payment--paid';
    } else if (status === 'refunded') {
      return 'payment--refunded';
    } else {
      return 'payment--pending';
    }
  }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return day + ' ' + months[date.getMonth()] + ', ' + days[date.getDay()];
  }

  formatTime(timeStr: string): string {
    const [hours, minutes] = timeStr.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return hour12 + ':' + minutes + ' ' + ampm;
  }

  viewDetails(booking: BookingWithExpert): void {
    this.selectedBooking.set(booking);
    this.isViewDetailsOpen.set(true);
  }

  closeViewDetails(): void {
    this.isViewDetailsOpen.set(false);
    this.selectedBooking.set(null);
  }

  modifyBooking(booking: BookingWithExpert): void {
    const originalData = booking.originalBooking || booking;
    this.router.navigate(['/customer/book-service'], {
      queryParams: {
        mode: 'modify',
        bookingId: booking.id
      },
      state: { 
        booking: originalData,
        expertId: booking.expert?.id || originalData.expertId
      }
    });
  }

  bookAgain(booking: BookingWithExpert): void {
    this.router.navigate(['/customer/book-service'], {
      queryParams: {
        serviceId: booking.serviceId
      }
    });
  }

  rebookService(booking: BookingWithExpert): void {
    this.bookAgain(booking);
  }

  callExpert(phone: string): void {
    window.location.href = 'tel:' + phone.replace(/\s/g, '');
  }

  rateBooking(booking: BookingWithExpert, rating: number): void {
    const bookings = this.allBookings();
    const index = bookings.findIndex(b => b.id === booking.id);
    if (index !== -1) {
      bookings[index].userRating = rating;
      this.allBookings.set([...bookings]);
    }
  }
}
```

---

## features/expert/dashboard/expert-dashboard.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/expert/dashboard/expert-dashboard.component.html`

```html
<!-- Expert Dashboard -->
<div class="dashboard-page">
  <!-- Shared Navbar -->
  <app-navbar [pageType]="'expert'" />

  <!-- Main Content -->
  <main class="main-content">
    <div class="dashboard-grid">
      <!-- ===== LEFT COLUMN ===== -->
      <div class="left-column">

        <!-- Welcome Banner -->
        <section class="welcome-banner">
          <div class="welcome-banner__content">
            <div class="welcome-banner__status">
              <button class="online-toggle" [class.online]="isOnline()" (click)="toggleOnlineStatus()">
                <span class="online-toggle__dot"></span>
                <span class="online-toggle__label">{{ isOnline() ? 'Online' : 'Offline' }}</span>
              </button>
              <span class="ready-badge">Ready to accept jobs</span>
            </div>
            <p class="welcome-banner__greeting">Welcome back,</p>
            <h1 class="welcome-banner__name">{{ userName().toUpperCase() }}!</h1>
            <div class="welcome-banner__skills">
              <span class="skills-label">Expert at</span>
              <div class="skills-icons">
                @for (skill of userSkills(); track skill) {
                  <div class="skill-icon" [title]="skill">
                    <img [src]="getSkillIcon(skill)" [alt]="skill" />
                  </div>
                }
              </div>
            </div>
          </div>
          <div class="welcome-banner__image">
            <img src="assets/images/expert-hero.png" alt="Expert" />
          </div>
        </section>

        <!-- My Reports -->
        <section class="reports-section">
          <h2 class="section-title">My Reports</h2>
          <div class="reports-grid">
            <div class="report-card">
              <div class="report-card__icon report-card__icon--jobs">
                <img src="assets/images/icons/todays-job.png" alt="Today's Job" />
              </div>
              <span class="report-card__label">Today's Job</span>
              <span class="report-card__value">{{ bookingCounts().todaysJobs < 10 ? '0' + bookingCounts().todaysJobs : bookingCounts().todaysJobs }}</span>
            </div>
            <div class="report-card">
              <div class="report-card__icon report-card__icon--week">
                <img src="assets/images/icons/this-week.png" alt="This Week" />
              </div>
              <span class="report-card__label">This Week</span>
              <span class="report-card__value">{{ bookingCounts().thisWeek < 10 ? '0' + bookingCounts().thisWeek : bookingCounts().thisWeek }}</span>
            </div>
            <div class="report-card">
              <div class="report-card__icon report-card__icon--earnings">
                <img src="assets/images/icons/total-earning.png" alt="Total Earning" />
              </div>
              <span class="report-card__label">Total Earning</span>
              <span class="report-card__value">{{ formatEarnings(bookingCounts().totalEarnings) }}</span>
            </div>
            <div class="report-card">
              <div class="report-card__icon report-card__icon--rating">
                <img src="assets/images/icons/my-rating.png" alt="My Rating" />
              </div>
              <span class="report-card__label">My Rating</span>
              <span class="report-card__value">{{ userRating() }}</span>
            </div>
          </div>
        </section>

        <!-- My Appointments -->
        <section class="appointments-section">
          <div class="appointments-header">
            <h2 class="section-title">My Appointments</h2>
            <div class="appointments-controls">
              <div class="search-box">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <input type="text" placeholder="Search..." (input)="onSearchChange($event)" />
              </div>
              <div class="filter-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <select class="filter-select" (change)="setFilter($any($event.target).value)">
                <option value="All">All</option>
                <option value="PENDING">Pending</option>
                <option value="CONFIRMED">Accepted</option>
                <option value="REJECTED">Rejected</option>
                <option value="CANCELLED">Cancelled</option>
                <option value="COMPLETED">Completed</option>
              </select>
            </div>
          </div>

          <div class="appointments-grid">
            @if (isLoadingBookings()) {
              <div class="loading-placeholder">Loading appointments...</div>
            } @else if (filteredAppointments().length === 0) {
              <div class="no-appointments">
                <p>No appointments found.</p>
              </div>
            } @else {
              @for (booking of filteredAppointments(); track booking.id) {
                <div class="appointment-card" [class]="getStatusClass(booking.status)">
                  <div class="appointment-card__header">
                    <div class="appointment-card__icon">
                      <img [src]="getServiceIcon(booking.serviceName)" [alt]="booking.serviceName" />
                    </div>
                    <div class="appointment-card__earning">
                      <span class="earning-amount">₹{{ booking.totalAmount | number:'1.0-0' }}/-</span>
                      <span class="earning-label">Earning</span>
                    </div>
                  </div>
                  <div class="appointment-card__body">
                    <div class="appointment-card__date">{{ formatBookingDate(booking.date) }}</div>
                    <div class="appointment-card__time">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      {{ formatTimeSlot(booking.timeSlot) }}, booked for {{ booking.duration }}hrs
                    </div>
                    <div class="appointment-card__address">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                        <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                      </svg>
                      201, Manjari Khurd, Pune - 143505
                    </div>
                    <div class="appointment-card__status" [class]="getStatusClass(booking.status)">
                      @if (booking.status === 'CONFIRMED') {
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#16a34a" stroke-width="2"/>
                          <path d="M8 12L11 15L16 9" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      } @else if (booking.status === 'REJECTED' || booking.status === 'CANCELLED') {
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#dc2626" stroke-width="2"/>
                          <path d="M15 9L9 15M9 9L15 15" stroke="#dc2626" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                      }
                      <span>{{ getStatusLabel(booking.status) }}</span>
                    </div>
                  </div>
                  <div class="appointment-card__footer">
                    <a class="view-details-link" (click)="viewDetails(booking)">View Details</a>
                  </div>
                </div>
              }
            }
          </div>
        </section>
      </div>

      <!-- ===== RIGHT COLUMN ===== -->
      <div class="right-column">

        <!-- Pending Requests -->
        <section class="pending-section">
          <h2 class="section-title section-title--red">Pending Requests</h2>
          @if (pendingBookings().length === 0) {
            <div class="no-pending">
              <p>No pending requests right now.</p>
            </div>
          } @else {
            @for (booking of pendingBookings(); track booking.id) {
              <div class="pending-card">
                <div class="pending-card__date">{{ formatBookingDate(booking.date) }}</div>
                <div class="pending-card__time">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                  {{ formatTimeSlot(booking.timeSlot) }}, booked for {{ booking.duration }}hrs
                </div>
                <div class="pending-card__address">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  201, Manjari Khurd, Pune - 143505
                </div>
                <button class="take-action-btn" (click)="openTakeAction(booking)">Take Action</button>
              </div>
            }
          }
        </section>

        <!-- My Calendar -->
        <section class="calendar-section">
          <h2 class="section-title section-title--navy">My Calendar</h2>
          <div class="calendar-widget">
            <div class="calendar-widget__today">
              <span class="calendar-widget__day-name">{{ todayDayName() }}</span>
              <span class="calendar-widget__day-number">{{ todayDate() }}</span>
            </div>
            <div class="calendar-widget__month">
              <div class="calendar-widget__month-header">
                <button class="cal-nav" (click)="prevMonth()">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
                <span class="month-label">{{ currentMonthName() }} {{ currentYear() }}</span>
                <button class="cal-nav" (click)="nextMonth()">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>
              <div class="calendar-widget__grid">
                <div class="cal-header">S</div>
                <div class="cal-header">M</div>
                <div class="cal-header">T</div>
                <div class="cal-header">W</div>
                <div class="cal-header">T</div>
                <div class="cal-header">F</div>
                <div class="cal-header">S</div>
                @for (day of calendarDays(); track $index) {
                  <div class="cal-day" 
                    [class.other-month]="!day.isCurrentMonth"
                    [class.today]="day.isToday"
                    [class.has-booking]="day.hasBooking">
                    {{ day.day }}
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Today's Schedule -->
          <div class="today-schedule">
            <h3 class="today-label">Today</h3>
            @if (todayBookings().length === 0) {
              <p class="no-today">No bookings today.</p>
            } @else {
              @for (booking of todayBookings(); track booking.id) {
                <div class="today-item">
                  <div class="today-item__icon">
                    <img [src]="getServiceIcon(booking.serviceName)" [alt]="booking.serviceName" />
                  </div>
                  <div class="today-item__info">
                    <span class="today-item__name">{{ booking.serviceName }}</span>
                    <div class="today-item__time">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      </svg>
                      {{ formatTimeSlot(booking.timeSlot) }}, booked for {{ booking.duration }}hrs
                    </div>
                    <div class="today-item__address">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="2"/>
                      </svg>
                      201, Manjari Khurd, Pune - 143505
                    </div>
                  </div>
                </div>
              }
            }
          </div>
        </section>
      </div>
    </div>
  </main>
</div>

<!-- Take Action Modal -->
@if (showTakeActionModal() && selectedBooking()) {
  <app-take-action-modal
    [booking]="selectedBooking()!"
    [customer]="selectedBookingCustomer()"
    [address]="selectedBookingAddress()"
    (close)="closeTakeActionModal()"
    (accept)="onAcceptBooking($event)"
    (reject)="onRejectBooking($event)"
  />
}
```

---

## features/expert/dashboard/expert-dashboard.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/expert/dashboard/expert-dashboard.component.scss`

```scss
// Expert Dashboard Styles - Matching Figma Design

// Variables
$navy: #0D436B;
$teal: #0D9488;
$red-accent: #DC2626;
$green: #16A34A;
$gray-100: #F7F8FA;
$gray-200: #E5E7EB;
$gray-300: #D1D5DB;
$gray-500: #6B7280;
$gray-700: #374151;
$gray-900: #111827;

.dashboard-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #E8F5F4 0%, #F0F9F8 30%, #F5FBFA 60%, #FFFFFF 100%);
}

.main-content {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 40px;
  padding-top: calc(96px + 1.5rem);

  @media (max-width: 768px) {
    padding: 1rem 16px;
    padding-top: calc(88px + 1rem);
  }
}

// ===== DASHBOARD GRID =====
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

// ===== WELCOME BANNER =====
.welcome-banner {
  background: linear-gradient(135deg, #E0F7FA 0%, #F0FDFA 50%, #FFFFFF 100%);
  border-radius: 16px;
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(13, 67, 107, 0.06);

  &__content {
    flex: 1;
    z-index: 1;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }

  &__greeting {
    font-size: 0.95rem;
    color: $gray-500;
    margin: 0;
  }

  &__name {
    font-size: 2rem;
    font-weight: 800;
    color: $red-accent;
    margin: 0.25rem 0 1rem;
    letter-spacing: 0.5px;
  }

  &__skills {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  &__image {
    width: 200px;
    height: 200px;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;

    &__image {
      width: 150px;
      height: 150px;
    }

    &__skills {
      justify-content: center;
    }
  }
}

.online-toggle {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: $green;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.35rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:not(.online) {
    background: $gray-500;
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
}

.ready-badge {
  font-size: 0.75rem;
  color: $gray-500;
  background: rgba(255,255,255,0.8);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
}

.skills-label {
  font-size: 0.85rem;
  color: $gray-500;
}

.skills-icons {
  display: flex;
  gap: 0.5rem;
}

.skill-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  overflow: hidden;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
}

// ===== SECTION TITLES =====
.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: $teal;
  margin-bottom: 1.25rem;

  &--red {
    color: $red-accent;
  }

  &--navy {
    color: $navy;
  }
}

// ===== MY REPORTS =====
.reports-section {
  margin-bottom: 2rem;
}

.reports-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.report-card {
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  }

  &__icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 44px;
      height: 44px;
      object-fit: contain;
    }
  }

  &__label {
    font-size: 0.8rem;
    color: $gray-500;
    font-weight: 500;
  }

  &__value {
    font-size: 1.75rem;
    font-weight: 800;
    color: $navy;
  }
}

// ===== MY APPOINTMENTS =====
.appointments-section {
  margin-bottom: 2rem;
}

.appointments-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.appointments-controls {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border: 1px solid $gray-200;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;

  input {
    border: none;
    outline: none;
    font-size: 0.85rem;
    width: 120px;
    color: $gray-700;

    &::placeholder {
      color: $gray-300;
    }
  }

  svg {
    color: $gray-500;
  }
}

.filter-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: white;
  border: 1px solid $gray-200;
  border-radius: 8px;
  cursor: pointer;
  color: $gray-500;
}

.filter-select {
  background: white;
  border: 1px solid $gray-200;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
  color: $gray-700;
  cursor: pointer;
  outline: none;
}

.appointments-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.appointment-card {
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  border: 2px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }

  &.status-accepted {
    border-color: rgba($green, 0.3);
  }

  &.status-rejected,
  &.status-cancelled {
    border-color: rgba($red-accent, 0.3);
  }

  &.status-pending {
    border-color: rgba(#F59E0B, 0.3);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.75rem;
  }

  &__icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: $gray-100;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
      width: 32px;
      height: 32px;
      object-fit: contain;
    }
  }

  &__earning {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background: linear-gradient(135deg, #FFF7ED 0%, #FEF3C7 100%);
    border-radius: 10px;
    padding: 0.4rem 0.75rem;
  }

  .earning-amount {
    font-size: 0.85rem;
    font-weight: 700;
    color: $navy;
  }

  .earning-label {
    font-size: 0.65rem;
    color: $gray-500;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  &__date {
    font-size: 0.9rem;
    font-weight: 600;
    color: $gray-900;
  }

  &__time,
  &__address {
    font-size: 0.78rem;
    color: $gray-500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  &__status {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    margin-top: 0.35rem;
    font-size: 0.78rem;
    font-weight: 600;

    &.status-accepted {
      color: $green;
    }

    &.status-rejected,
    &.status-cancelled {
      color: $red-accent;
    }

    &.status-pending {
      color: #F59E0B;
    }

    &.status-completed {
      color: $teal;
    }

    &.status-progress {
      color: #3B82F6;
    }
  }

  &__footer {
    margin-top: 0.75rem;
    text-align: right;
  }

  .view-details-link {
    color: $navy;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.2s;

    &:hover {
      color: $teal;
    }
  }
}

.no-appointments,
.loading-placeholder {
  grid-column: 1 / -1;
  text-align: center;
  padding: 2rem;
  color: $gray-500;
  font-size: 0.9rem;
}

// ===== RIGHT COLUMN =====
.right-column {
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

// ===== PENDING REQUESTS =====
.pending-section {
  margin-bottom: 2rem;
}

.pending-card {
  background: white;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  border-left: 3px solid $red-accent;

  &__date {
    font-size: 0.9rem;
    font-weight: 600;
    color: $gray-900;
    margin-bottom: 0.35rem;
  }

  &__time,
  &__address {
    font-size: 0.78rem;
    color: $gray-500;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.2rem;
  }

  .take-action-btn {
    display: block;
    margin-left: auto;
    margin-top: 0.5rem;
    background: none;
    border: none;
    color: $teal;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
    transition: color 0.2s;

    &:hover {
      color: darken($teal, 10%);
    }
  }
}

.no-pending {
  text-align: center;
  padding: 1.5rem;
  color: $gray-500;
  font-size: 0.85rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

// ===== CALENDAR =====
.calendar-section {
  margin-bottom: 2rem;
}

.calendar-widget {
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  display: flex;
  gap: 1.25rem;
  margin-bottom: 1.25rem;

  &__today {
    background: $navy;
    color: white;
    border-radius: 12px;
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 80px;
  }

  &__day-name {
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: capitalize;
  }

  &__day-number {
    font-size: 2.5rem;
    font-weight: 800;
    line-height: 1;
  }

  &__month {
    flex: 1;
  }

  &__month-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    text-align: center;
  }
}

.cal-nav {
  background: none;
  border: none;
  cursor: pointer;
  color: $gray-500;
  padding: 0.25rem;
  border-radius: 4px;

  &:hover {
    background: $gray-100;
  }
}

.month-label {
  font-size: 0.85rem;
  font-weight: 700;
  color: $navy;
}

.cal-header {
  font-size: 0.7rem;
  font-weight: 600;
  color: $gray-500;
  padding: 0.25rem;
}

.cal-day {
  font-size: 0.72rem;
  padding: 0.3rem;
  border-radius: 50%;
  color: $gray-700;
  cursor: default;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &.other-month {
    color: $gray-300;
  }

  &.today {
    background: $navy;
    color: white;
    font-weight: 700;
  }

  &.has-booking {
    background: rgba($teal, 0.15);
    color: $teal;
    font-weight: 600;
  }

  &.today.has-booking {
    background: $teal;
    color: white;
  }
}

// ===== TODAY'S SCHEDULE =====
.today-schedule {
  background: white;
  border-radius: 14px;
  padding: 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
}

.today-label {
  font-size: 0.95rem;
  font-weight: 700;
  color: $gray-900;
  margin-bottom: 0.75rem;
}

.no-today {
  font-size: 0.82rem;
  color: $gray-500;
}

.today-item {
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid $gray-100;

  &:last-child {
    border-bottom: none;
  }

  &__icon {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    background: $gray-100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }

  &__info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  &__name {
    font-size: 0.85rem;
    font-weight: 600;
    color: $gray-900;
  }

  &__time,
  &__address {
    font-size: 0.72rem;
    color: $gray-500;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
}
```

---

## features/expert/dashboard/expert-dashboard.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/expert/dashboard/expert-dashboard.component.ts`

```ts
import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, filter, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { TakeActionModalComponent } from '../take-action-modal/take-action-modal.component';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { BookingActions, Booking, BookingStatus } from '../../../core/store/booking/booking.actions';
import { selectUser } from '../../../core/store/auth/auth.selectors';
import { 
  selectExpertBookings, 
  selectExpertBookingsLoading, 
  selectPendingBookings,
  selectExpertBookingCounts 
} from '../../../core/store/booking/booking.selectors';

interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  hasBooking: boolean;
}

@Component({
  selector: 'app-expert-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, TakeActionModalComponent],
  templateUrl: './expert-dashboard.component.html',
  styleUrl: './expert-dashboard.component.scss'
})
export class ExpertDashboardComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly destroy$ = new Subject<void>();
  private readonly API_URL = 'http://localhost:3000';

  // User info
  currentUser = signal<any>(null);
  userName = computed(() => this.currentUser()?.name || 'Expert');
  userLocation = computed(() => {
    const user = this.currentUser();
    return user?.location ? `${user.location.area}, ${user.location.city}` : '';
  });
  userSkills = computed(() => this.currentUser()?.skills || []);
  userRating = computed(() => this.currentUser()?.rating || 0);
  isOnline = signal(true);

  // Bookings
  allBookings = signal<Booking[]>([]);
  pendingBookings = signal<Booking[]>([]);
  isLoadingBookings = signal(true);
  bookingCounts = signal<any>({
    todaysJobs: 0, thisWeek: 0, totalEarnings: 0, pending: 0,
    confirmed: 0, completed: 0, rejected: 0, cancelled: 0
  });

  // Appointments filter
  appointmentFilter = signal<string>('All');
  searchQuery = signal('');
  filteredAppointments = computed(() => {
    let bookings = this.allBookings();
    const filterVal = this.appointmentFilter();
    const query = this.searchQuery().toLowerCase();

    if (filterVal !== 'All') {
      bookings = bookings.filter(b => b.status === filterVal);
    }
    if (query) {
      bookings = bookings.filter(b =>
        (b.serviceName || '').toLowerCase().includes(query) ||
        (b.status || '').toLowerCase().includes(query)
      );
    }
    return bookings;
  });

  // Calendar
  currentMonth = signal(new Date());
  calendarDays = computed(() => this.generateCalendarDays());
  currentMonthName = computed(() => {
    return this.currentMonth().toLocaleDateString('en-US', { month: 'long' }).toUpperCase();
  });
  currentYear = computed(() => this.currentMonth().getFullYear());
  todayDate = computed(() => {
    const today = new Date();
    return today.getDate();
  });
  todayDayName = computed(() => {
    return new Date().toLocaleDateString('en-US', { weekday: 'long' });
  });
  todayBookings = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.allBookings().filter(b => {
      const bDate = new Date(b.date);
      bDate.setHours(0, 0, 0, 0);
      return bDate.getTime() === today.getTime();
    });
  });

  // Take Action Modal
  showTakeActionModal = signal(false);
  selectedBooking = signal<Booking | null>(null);
  selectedBookingCustomer = signal<any>(null);
  selectedBookingAddress = signal<any>(null);

  // Service icons map
  serviceIcons: Record<string, string> = {
    'Cleaning': 'assets/images/services/cleaning-icon.png',
    'Cooking': 'assets/images/services/cooking-icon.png',
    'Gardening': 'assets/images/services/gardening-icon.png',
    'Plumbing': 'assets/images/services/plumbing-icon.png',
    'Electrician': 'assets/images/services/electrician-icon.png',
    'Baby Sitting': 'assets/images/services/babysitting-icon.png',
    'Carpentry': 'assets/images/services/carpentry-icon.png',
    'Painting': 'assets/images/services/painting-icon.png'
  };

  // Skill icons map
  skillIcons: Record<string, string> = {
    'Cleaning': 'assets/images/services/cleaning-icon.png',
    'Cooking': 'assets/images/services/cooking-icon.png',
    'Gardening': 'assets/images/services/gardening-icon.png',
    'Plumbing': 'assets/images/services/plumbing-icon.png',
    'Electrician': 'assets/images/services/electrician-icon.png',
    'Baby Sitting': 'assets/images/services/babysitting-icon.png',
    'Carpentry': 'assets/images/services/carpentry-icon.png',
    'Painting': 'assets/images/services/painting-icon.png'
  };

  ngOnInit(): void {
    // Subscribe to user from store
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$),
      filter(user => user !== null)
    ).subscribe(user => {
      if (user) {
        this.currentUser.set(user);
        this.isOnline.set((user as any).isOnline ?? true);
        // Load expert's bookings
        this.store.dispatch(BookingActions.loadExpertBookings({ expertId: user.id }));
      }
    });

    // Subscribe to expert bookings (separate from customer bookings)
    this.store.select(selectExpertBookings).pipe(
      takeUntil(this.destroy$)
    ).subscribe(bookings => {
      this.allBookings.set(bookings);
    });

    // Subscribe to pending bookings
    this.store.select(selectPendingBookings).pipe(
      takeUntil(this.destroy$)
    ).subscribe(bookings => {
      this.pendingBookings.set(bookings);
    });

    // Subscribe to booking counts
    this.store.select(selectExpertBookingCounts).pipe(
      takeUntil(this.destroy$)
    ).subscribe(counts => {
      this.bookingCounts.set(counts);
    });

    // Subscribe to expert loading state
    this.store.select(selectExpertBookingsLoading).pipe(
      takeUntil(this.destroy$)
    ).subscribe(loading => {
      this.isLoadingBookings.set(loading);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Toggle online status
  toggleOnlineStatus(): void {
    const newStatus = !this.isOnline();
    this.isOnline.set(newStatus);
    const user = this.currentUser();
    if (user) {
      this.http.patch(`${this.API_URL}/users/${user.id}`, { isOnline: newStatus })
        .subscribe();
    }
  }

  // Format booking date
  formatBookingDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    return `${day} ${month}, ${weekday}`;
  }

  // Format time slot
  formatTimeSlot(timeSlot: string): string {
    if (!timeSlot) return '';
    const [start] = timeSlot.split('-');
    const [hours, minutes] = start.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  }

  // Get service icon
  getServiceIcon(serviceName: string): string {
    return this.serviceIcons[serviceName] || 'assets/images/services/cleaning-icon.png';
  }

  // Get skill icon
  getSkillIcon(skill: string): string {
    return this.skillIcons[skill] || 'assets/images/services/cleaning-icon.png';
  }

  // Get status label
  getStatusLabel(status: string): string {
    switch (status) {
      case 'PENDING': return 'Pending';
      case 'CONFIRMED': return 'Booking Accepted';
      case 'IN_PROGRESS': return 'In Progress';
      case 'COMPLETED': return 'Completed';
      case 'CANCELLED': return 'Cancelled by Customer';
      case 'REJECTED': return 'Booking Rejected';
      default: return status;
    }
  }

  // Get status CSS class
  getStatusClass(status: string): string {
    switch (status) {
      case 'PENDING': return 'status-pending';
      case 'CONFIRMED': return 'status-accepted';
      case 'IN_PROGRESS': return 'status-progress';
      case 'COMPLETED': return 'status-completed';
      case 'CANCELLED': return 'status-cancelled';
      case 'REJECTED': return 'status-rejected';
      default: return '';
    }
  }

  // Format earnings
  formatEarnings(amount: number): string {
    if (amount >= 1000) {
      return `₹${(amount / 1000).toFixed(1)}K`;
    }
    return `₹${amount}`;
  }

  // Set filter
  setFilter(filter: string): void {
    this.appointmentFilter.set(filter);
  }

  // Search
  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
  }

  // Open Take Action Modal
  openTakeAction(booking: Booking): void {
    this.selectedBooking.set(booking);
    
    // Fetch customer and address details
    if (booking.customerId) {
      this.http.get(`${this.API_URL}/users/${booking.customerId}`)
        .subscribe((customer: any) => {
          this.selectedBookingCustomer.set(customer);
        });
    }
    if (booking.addressId) {
      this.http.get(`${this.API_URL}/addresses/${booking.addressId}`)
        .subscribe((address: any) => {
          this.selectedBookingAddress.set(address);
        });
    }

    this.showTakeActionModal.set(true);
  }

  // Close modal
  closeTakeActionModal(): void {
    this.showTakeActionModal.set(false);
    this.selectedBooking.set(null);
    this.selectedBookingCustomer.set(null);
    this.selectedBookingAddress.set(null);
  }

  // Accept booking
  onAcceptBooking(bookingId: string): void {
    this.store.dispatch(BookingActions.acceptBooking({ bookingId }));
    this.closeTakeActionModal();
  }

  // Reject booking
  onRejectBooking(bookingId: string): void {
    this.store.dispatch(BookingActions.rejectBooking({ bookingId }));
    this.closeTakeActionModal();
  }

  // View booking details
  viewDetails(booking: Booking): void {
    this.openTakeAction(booking);
  }

  // Calendar methods
  generateCalendarDays(): CalendarDay[] {
    const current = this.currentMonth();
    const year = current.getFullYear();
    const month = current.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    
    const bookingDates = new Set(
      this.allBookings().map(b => {
        const d = new Date(b.date);
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      })
    );

    const days: CalendarDay[] = [];

    // Previous month padding
    const prevMonthDays = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        isToday: false,
        hasBooking: false
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dateKey = `${year}-${month}-${d}`;
      days.push({
        day: d,
        isCurrentMonth: true,
        isToday: today.getFullYear() === year && today.getMonth() === month && today.getDate() === d,
        hasBooking: bookingDates.has(dateKey)
      });
    }

    // Next month padding
    const remaining = 42 - days.length;
    for (let d = 1; d <= remaining; d++) {
      days.push({
        day: d,
        isCurrentMonth: false,
        isToday: false,
        hasBooking: false
      });
    }

    return days;
  }

  prevMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() - 1, 1));
  }

  nextMonth(): void {
    const current = this.currentMonth();
    this.currentMonth.set(new Date(current.getFullYear(), current.getMonth() + 1, 1));
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
```

---

## features/expert/take-action-modal/take-action-modal.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/expert/take-action-modal/take-action-modal.component.html`

```html
<!-- Take Action Modal -->
<div class="modal-overlay" (click)="onOverlayClick($event)">
  <div class="modal-container">
    <!-- Header -->
    <div class="modal-header">
      <h2 class="modal-title">TAKE ACTION</h2>
      <button class="modal-close" (click)="onClose()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>

    <!-- Body -->
    <div class="modal-body">
      <!-- Service Type & Earnings Row -->
      <div class="info-row">
        <div class="info-card service-type">
          <span class="info-card__label">Service Type</span>
          <div class="info-card__icon">
            <img [src]="serviceIcon" [alt]="booking.serviceName" />
          </div>
          <span class="info-card__name">{{ booking.serviceName }}</span>
        </div>
        <div class="info-card earnings-card">
          <span class="info-card__label">Earnings From This Booking</span>
          <div class="earnings-display">
            <div class="earnings-gift">
              🎁
            </div>
            <span class="earnings-amount">₹{{ booking.totalAmount | number:'1.2-2' }}</span>
          </div>
        </div>
      </div>

      <!-- Schedule & Customer Row -->
      <div class="info-row">
        <div class="info-card schedule-card">
          <div class="info-card__header">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M3 10H21" stroke="currentColor" stroke-width="1.5"/>
              <path d="M8 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M16 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            <span class="info-card__label">Schedule Details</span>
          </div>
          <div class="schedule-details">
            <div class="detail-row">
              <span class="detail-label">Frequency:</span>
              <span class="detail-value">{{ frequency }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Start Date:</span>
              <span class="detail-value">{{ startDate }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time Slot:</span>
              <span class="detail-value">{{ timeSlot }}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Duration per session:</span>
              <span class="detail-value">{{ duration }}</span>
            </div>
          </div>
        </div>

        <div class="info-card customer-card">
          <div class="customer-section">
            <div class="info-card__header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <span class="info-card__label">Customer Name</span>
            </div>
            <span class="customer-name">{{ customerName }}</span>
          </div>

          <div class="address-section">
            <div class="info-card__header">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5 7 1 12 1C17 1 21 5 21 10Z" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span class="info-card__label">Service Address</span>
            </div>
            <span class="address-text">{{ serviceAddress }}</span>
          </div>
        </div>
      </div>

      <!-- Status display for non-pending bookings -->
      @if (!isPending) {
        <div class="status-banner" [class]="'status-' + booking.status.toLowerCase()">
          <span>This booking has been <strong>{{ statusLabel }}</strong></span>
        </div>
      }
    </div>

    <!-- Footer - Action Buttons (only for PENDING) -->
    @if (isPending) {
      <div class="modal-footer">
        <button class="btn-reject" (click)="onReject()">REJECT BOOKING</button>
        <button class="btn-accept" (click)="onAccept()">ACCEPT BOOKING</button>
      </div>
    }
  </div>
</div>
```

---

## features/expert/take-action-modal/take-action-modal.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/expert/take-action-modal/take-action-modal.component.scss`

```scss
// Take Action Modal Styles

$navy: #0D436B;
$teal: #0D9488;
$red: #DC2626;
$green: #16A34A;
$gray-100: #F7F8FA;
$gray-200: #E5E7EB;
$gray-300: #D1D5DB;
$gray-500: #6B7280;
$gray-700: #374151;
$gray-900: #111827;

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-container {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Header
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 0;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: $navy;
  letter-spacing: 0.5px;
}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  color: $gray-500;
  padding: 0.25rem;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: $gray-100;
    color: $gray-900;
  }
}

// Body
.modal-body {
  padding: 1.5rem 2rem;
}

.info-row {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
}

.info-card {
  border: 1px solid $gray-200;
  border-radius: 12px;
  padding: 1.25rem;

  &__label {
    font-size: 0.85rem;
    font-weight: 600;
    color: $gray-900;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    color: $gray-700;
  }

  &__icon {
    width: 60px;
    height: 60px;
    margin: 1rem auto 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 48px;
      height: 48px;
      object-fit: contain;
    }
  }

  &__name {
    display: block;
    text-align: center;
    font-size: 0.85rem;
    font-weight: 600;
    color: $gray-700;
    background: $gray-100;
    border-radius: 6px;
    padding: 0.35rem 0.75rem;
    margin: 0 auto;
    width: fit-content;
  }
}

// Service Type Card
.service-type {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

// Earnings Card
.earnings-card {
  display: flex;
  flex-direction: column;
}

.earnings-display {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: center;
}

.earnings-gift {
  font-size: 3rem;
}

.earnings-amount {
  font-size: 2.75rem;
  font-weight: 800;
  color: $gray-900;
  font-family: 'Arial', sans-serif;
}

// Schedule Details
.schedule-details {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-label {
  font-size: 0.82rem;
  color: $gray-500;
}

.detail-value {
  font-size: 0.82rem;
  font-weight: 600;
  color: $gray-900;
}

// Customer Card
.customer-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.customer-name {
  font-size: 0.9rem;
  color: $gray-700;
}

.address-text {
  font-size: 0.85rem;
  color: $gray-500;
  line-height: 1.4;
}

// Status Banner (for non-pending bookings)
.status-banner {
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1rem;

  &.status-confirmed {
    background: rgba($green, 0.1);
    color: $green;
  }

  &.status-rejected {
    background: rgba($red, 0.1);
    color: $red;
  }

  &.status-cancelled {
    background: rgba($red, 0.1);
    color: $red;
  }

  &.status-completed {
    background: rgba($teal, 0.1);
    color: $teal;
  }
}

// Footer
.modal-footer {
  display: flex;
  gap: 1rem;
  padding: 0 2rem 2rem;
  justify-content: center;
}

.btn-reject,
.btn-accept {
  flex: 1;
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-reject {
  background: white;
  border: 2px solid $gray-300;
  color: $gray-700;

  &:hover {
    border-color: $red;
    color: $red;
    background: rgba($red, 0.05);
  }
}

.btn-accept {
  background: $navy;
  border: 2px solid $navy;
  color: white;

  &:hover {
    background: darken($navy, 8%);
  }
}
```

---

## features/expert/take-action-modal/take-action-modal.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/expert/take-action-modal/take-action-modal.component.ts`

```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Booking } from '../../../core/store/booking/booking.actions';

@Component({
  selector: 'app-take-action-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './take-action-modal.component.html',
  styleUrl: './take-action-modal.component.scss'
})
export class TakeActionModalComponent {
  @Input() booking!: Booking;
  @Input() customer: any = null;
  @Input() address: any = null;

  @Output() close = new EventEmitter<void>();
  @Output() accept = new EventEmitter<string>();
  @Output() reject = new EventEmitter<string>();

  // Service icons
  serviceIcons: Record<string, string> = {
    'Cleaning': 'assets/images/services/cleaning-icon.png',
    'Cooking': 'assets/images/services/cooking-icon.png',
    'Gardening': 'assets/images/services/gardening-icon.png',
    'Plumbing': 'assets/images/services/plumbing-icon.png',
    'Electrician': 'assets/images/services/electrician-icon.png',
    'Baby Sitting': 'assets/images/services/babysitting-icon.png',
    'Carpentry': 'assets/images/services/carpentry-icon.png',
    'Painting': 'assets/images/services/painting-icon.png'
  };

  get serviceIcon(): string {
    return this.serviceIcons[this.booking?.serviceName] || 'assets/images/services/cleaning-icon.png';
  }

  get customerName(): string {
    return this.customer?.name || 'Customer';
  }

  get serviceAddress(): string {
    if (this.address) {
      return `${this.address.line1}, ${this.address.pincode}`;
    }
    return '201, Manjari Khurd, 143505';
  }

  get frequency(): string {
    if (!this.booking?.frequency) return 'Once';
    return this.booking.frequency.charAt(0).toUpperCase() + this.booking.frequency.slice(1);
  }

  get startDate(): string {
    if (!this.booking?.date) return '';
    const date = new Date(this.booking.date);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  get timeSlot(): string {
    if (!this.booking?.timeSlot) return '';
    return this.booking.timeSlot.replace('-', '-');
  }

  get duration(): string {
    return `${this.booking?.duration || 2} hours`;
  }

  get isPending(): boolean {
    return this.booking?.status === 'PENDING';
  }

  get isConfirmed(): boolean {
    return this.booking?.status === 'CONFIRMED';
  }

  get isRejected(): boolean {
    return this.booking?.status === 'REJECTED';
  }

  get isCancelled(): boolean {
    return this.booking?.status === 'CANCELLED';
  }

  get statusLabel(): string {
    switch (this.booking?.status) {
      case 'CONFIRMED': return 'Accepted';
      case 'REJECTED': return 'Rejected';
      case 'CANCELLED': return 'Cancelled';
      case 'COMPLETED': return 'Completed';
      default: return 'Pending';
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onAccept(): void {
    this.accept.emit(this.booking.id);
  }

  onReject(): void {
    this.reject.emit(this.booking.id);
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.onClose();
    }
  }
}
```

---

## features/landing/landing.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/landing/landing.component.html`

```html
<!-- Header -->
<header class="header">
  <div class="header__container">
    <!-- Logo -->
    <a routerLink="/" class="header__logo" aria-label="HouseMate Home">
      <div class="header__logo-icon">
        <span>H</span>
      </div>
      <span class="header__logo-text">HouseMate</span>
    </a>

    <!-- Navigation -->
    <nav class="header__nav" aria-label="Main navigation">
      <a routerLink="/login" [queryParams]="{role: 'customer'}" class="header__nav-link">
        Customer Login
      </a>
      <a routerLink="/login" [queryParams]="{role: 'expert'}" class="header__nav-link">
        Expert Login
      </a>
    </nav>
  </div>
</header>

<!-- Hero Section -->
<section class="hero">
  <div class="hero__container">
    <!-- Left Content -->
    <div class="hero__content">
      <span class="hero__tagline">ON DEMAND</span>
      <h1 class="hero__title">TRUSTED HOME SERVICES</h1>
      <p class="hero__description">
        Connect with verified, trained home-service experts for ASAP or scheduled
        services. Fast, transparent, and reliable.
      </p>
      
      <div class="hero__actions">
        <a routerLink="/customer/book-service" class="btn btn-primary">
          BOOK SERVICE
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a routerLink="/register/expert" class="btn btn-outline">
          BECOME AN EXPERT
        </a>
      </div>

      <!-- Scroll Indicator -->
      <button class="hero__scroll" (click)="scrollToFeatures()" aria-label="Scroll to features">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Scroll</span>
      </button>
    </div>

    <!-- Right Image Section -->
    <div class="hero__image-section">
      <!-- Hero Image -->
      <div class="hero__image-wrapper">
        <img 
          src="assets/cleaning.png" 
          alt="Professional cleaning service expert with mop and broom"
          class="hero__image"
        />
      </div>
    </div>
  </div>
</section>

<!-- Why Choose Section -->
<section class="why-choose" id="why-choose">
  <div class="why-choose__container">
    <h2 class="why-choose__title">
      Why choose <strong>HouseMate</strong>
    </h2>

    <div class="why-choose__features">
      @for (feature of features; track feature.title) {
        <article class="feature-card">
          <div class="feature-card__icon">
            <img 
              [src]="'assets/' + feature.image" 
              [alt]="feature.title"
              class="feature-card__icon-image"
            />
          </div>
          <h3 class="feature-card__title">{{ feature.title }}</h3>
          <p class="feature-card__description">{{ feature.description }}</p>
        </article>
      }
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="cta">
  <div class="cta__container">
    <h2 class="cta__title">Ready to Get Started?</h2>
    <p class="cta__description">Join thousands of satisfied customers and expert providers</p>
    
    <div class="cta__actions">
      <a routerLink="/customer/book-service" class="btn btn-primary">
        BOOK SERVICE
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <a routerLink="/register/expert" class="btn btn-outline">
        BECOME AN EXPERT
      </a>
    </div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="footer__container">
    <p class="footer__copyright">© 2026 HouseMate. All rights reserved.</p>
  </div>
</footer>
```

---

## features/landing/landing.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/landing/landing.component.scss`

```scss
/* Landing Page Styles - Matching Figma Design Exactly */

// Color Variables
$teal-primary: #0D9488;
$teal-dark: #0F766E;
$navy: #0D436B;
$navy-light: #366F85;

/* Header */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 32px;
    
    @media (max-width: 768px) {
      padding: 12px 16px;
    }
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    
    &-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, $teal-primary 0%, $teal-dark 100%);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        color: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
        font-size: 18px;
        font-weight: 700;
      }
    }
    
    &-text {
      color: $teal-primary;
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.07px;
    }
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 8px;
    
    @media (max-width: 480px) {
      gap: 4px;
    }
    
    &-link {
      display: flex;
      padding: 10px 12px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      color: #181D27;
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      letter-spacing: -0.15px;
      border-radius: 8px;
      transition: all 0.3s ease;
      
      &:hover {
        background: rgba($teal-primary, 0.08);
      }
      
      @media (max-width: 480px) {
        padding: 8px 10px;
        font-size: 12px;
      }
    }
  }
}

/* Hero Section */
.hero {
  min-height: 100vh;
  padding-top: 80px;
  background: linear-gradient(180deg, #FFFFFF 0%, #E8F5F4 50%, #D5F0EE 100%);
  
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 32px;
    min-height: calc(100vh - 80px);
    gap: 40px;
    
    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: center;
      padding: 24px 16px;
    }
  }
  
  &__content {
    flex: 1;
    max-width: 560px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    @media (max-width: 1024px) {
      align-items: center;
      order: 2;
    }
  }
  
  &__tagline {
    color: $teal-primary;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  
  &__title {
    color: $navy;
    font-family: 'Open Sans', sans-serif;
    font-size: 48px;
    font-weight: 740;
    line-height: 1.1;
    letter-spacing: 0.96px;
    text-transform: uppercase;
    margin-top: -8px;
    
    @media (max-width: 768px) {
      font-size: 36px;
    }
    
    @media (max-width: 480px) {
      font-size: 28px;
    }
  }
  
  &__description {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    max-width: 460px;
  }
  
  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
    
    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
      
      .btn {
        width: 100%;
      }
    }
  }
  
  &__scroll {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 48px;
    background: transparent;
    border: none;
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 8px;
    border-radius: 8px;
    
    @media (max-width: 1024px) {
      margin-top: 24px;
    }
    
    &:hover {
      color: $teal-primary;
      background: rgba(13, 148, 136, 0.05);
    }
    
    svg {
      animation: bounce 2s infinite;
    }
  }
  
  &__image-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    max-width: 520px;
    
    @media (max-width: 1024px) {
      order: 1;
      max-width: 350px;
    }
  }
  
  &__badge {
    position: absolute;
    top: 40px;
    right: 60px;
    padding: 12px 32px;
    background: $teal-primary;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 600;
    border-radius: 30px;
    z-index: 2;
    box-shadow: 0 4px 20px rgba(13, 148, 136, 0.3);
    
    @media (max-width: 768px) {
      top: 20px;
      right: 20px;
      font-size: 14px;
      padding: 8px 20px;
    }
  }
  
  &__image-wrapper {
    width: 100%;
    max-width: 483px;
    position: relative;
  }
  
  &__image {
    width: 100%;
    max-width: 483px;
    height: auto;
    object-fit: contain;
    
    @media (max-width: 1024px) {
      max-width: 350px;
    }
    
    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
  
  &__image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #E8F5F4 0%, #D5F0EE 100%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border: 2px dashed $teal-primary;
    aspect-ratio: 483 / 640;
    
    svg {
      opacity: 0.6;
    }
    
    span {
      color: $teal-primary;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      opacity: 0.8;
    }
    
    .dimensions {
      color: $teal-dark;
      font-size: 12px;
      opacity: 0.6;
    }
  }
}

/* Why Choose Section */
.why-choose {
  padding: 80px 32px;
  background: linear-gradient(180deg, #D5F0EE 0%, #E8F5F4 100%);
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  
  &__container {
    max-width: 1280px;
    margin: 0 auto;
  }
  
  &__title {
    text-align: center;
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 32px;
    font-weight: 400;
    line-height: 48px;
    margin-bottom: 48px;
    
    strong {
      font-weight: 700;
    }
    
    @media (max-width: 768px) {
      font-size: 24px;
      line-height: 36px;
      margin-bottom: 32px;
    }
  }
  
  &__features {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      max-width: 320px;
      margin: 0 auto;
    }
  }
}

/* Feature Card */
.feature-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: -13px;
  padding: 24px 16px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  border: 1px solid rgba(13, 148, 136, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(13, 148, 136, 0.12);
  }
  
  &__icon {
    margin-bottom: 8px;
    
    &-image {
      width: 179px;
      height: 179px;
      aspect-ratio: 1/1;
      object-fit: contain;
      
      @media (max-width: 768px) {
        width: 140px;
        height: 140px;
      }
    }
    
    &-placeholder {
      width: 179px;
      height: 179px;
      background: linear-gradient(135deg, #E8F5F4 0%, #D5F0EE 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px dashed rgba(13, 148, 136, 0.3);
      
      @media (max-width: 768px) {
        width: 140px;
        height: 140px;
      }
    }
  }
  
  &__title {
    color: #181D27;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 8px;
  }
  
  &__description {
    color: #535862;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    max-width: 220px;
  }
}

/* CTA Section */
.cta {
  padding: 80px 32px;
  background: linear-gradient(180deg, #E8F5F4 0%, #FFFFFF 100%);
  
  @media (max-width: 768px) {
    padding: 60px 16px;
  }
  
  &__container {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
  }
  
  &__title {
    color: #181D27;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0.396px;
    margin-bottom: 8px;
  }
  
  &__description {
    color: #535862;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 32px;
  }
  
  &__actions {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    
    @media (max-width: 480px) {
      flex-direction: column;
      
      .btn {
        width: 100%;
        max-width: 280px;
      }
    }
  }
}

/* Footer */
.footer {
  padding: 24px 32px;
  background: #FFFFFF;
  border-top: 1px solid rgba(13, 148, 136, 0.1);
  
  &__container {
    max-width: 1280px;
    margin: 0 auto;
    text-align: center;
  }
  
  &__copyright {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
}

/* Animation */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(6px);
  }
  60% {
    transform: translateY(3px);
  }
}
```

---

## features/landing/landing.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/features/landing/landing.component.ts`

```ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  features = [
    {
      icon: 'verified-experts',
      image: 'verified.png',
      title: 'Verified Experts',
      description: 'All experts undergo KYC verification and background checks'
    },
    {
      icon: 'fast-service',
      image: 'fast-service.png',
      title: 'Fast Service',
      description: 'ASAP bookings or schedule up to 4 days in advance'
    },
    {
      icon: 'quality-assurance',
      image: 'quality-assurance.png',
      title: 'Quality Assurance',
      description: 'OTP-verified service start and customer ratings'
    },
    {
      icon: 'expert-support',
      image: 'expert-support.png',
      title: 'Expert Support',
      description: 'OTP-verified service start and customer ratings'
    }
  ];

  scrollToFeatures(): void {
    const element = document.getElementById('why-choose');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
```

---

## shared/components/navbar/navbar.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/navbar/navbar.component.html`

```html
<!-- Shared Navbar Component -->
<header class="navbar">
  <div class="navbar__container">
    <!-- Logo -->
    <a routerLink="/" class="navbar__logo">
      <div class="navbar__logo-icon">
        <span>H</span>
      </div>
      <span class="navbar__logo-text">HouseMate</span>
    </a>
    
    <!-- Navigation -->
    <nav class="navbar__nav">
      @if (pageType === 'customer') {
        <a routerLink="/customer/book-service" class="navbar__nav-link">Services</a>
        <a routerLink="/customer/bookings" class="navbar__nav-link">My Bookings</a>
      } @else if (pageType === 'expert') {
        <a routerLink="/expert/dashboard" class="navbar__nav-link">Dashboard</a>
        <a routerLink="/expert/bookings" class="navbar__nav-link">My Jobs</a>
      } @else if (pageType === 'admin') {
        <a routerLink="/admin/dashboard" class="navbar__nav-link">Dashboard</a>
        <a routerLink="/admin/users" class="navbar__nav-link">Users</a>
      }
      
      <!-- User Menu -->
      <div class="user-menu">
        <button class="user-menu__trigger" (click)="toggleUserMenu(); $event.stopPropagation()">
          <div class="user-menu__avatar">
            <img [src]="userAvatar()" alt="User Avatar" />
          </div>
          <span class="user-menu__name">{{ userName() }}</span>
          <svg class="user-menu__arrow" [class.rotated]="isUserMenuOpen()" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        
        @if (isUserMenuOpen()) {
          <div class="user-menu__dropdown">
            <a routerLink="/customer/profile" class="user-menu__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              My Profile
            </a>
            <a routerLink="/customer/bookings" class="user-menu__item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 10H21" stroke="currentColor" stroke-width="1.5"/>
                <path d="M8 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              My Bookings
            </a>
            <div class="user-menu__divider"></div>
            <button class="user-menu__item user-menu__item--logout" (click)="logout()">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 17L21 12L16 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 12H9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Logout
            </button>
          </div>
        }
      </div>
    </nav>
  </div>
</header>
```

---

## shared/components/navbar/navbar.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/navbar/navbar.component.scss`

```scss
/* Navbar Component Styles - Matching Figma Exactly */

.navbar {
  position: fixed;
  top: 16px;
  left: 24px;
  right: 24px;
  height: 64px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 16px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  @media (max-width: 768px) {
    top: 12px;
    left: 16px;
    right: 16px;
    border-radius: 12px;
  }
  
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 24px;
    
    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }
  
  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    
    &-icon {
      width: 36px;
      height: 36px;
      background: #0D436B;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      span {
        color: #FFFFFF;
        font-family: 'Open Sans', sans-serif;
        font-size: 20px;
        font-weight: 700;
      }
    }
    
    &-text {
      color: #181D27;
      font-family: 'Open Sans', sans-serif;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
  }
  
  &__nav {
    display: flex;
    align-items: center;
    gap: 32px;
    
    @media (max-width: 768px) {
      gap: 16px;
    }
    
    &-link {
      color: #535862;
      font-family: 'Open Sans', sans-serif;
      font-size: 14px;
      font-weight: 500;
      text-decoration: none;
      padding: 8px 4px;
      transition: color 0.2s ease;
      
      &:hover {
        color: #181D27;
      }
      
      &.active {
        color: #0D436B;
        font-weight: 600;
      }
    }
  }
}

/* User Menu */
.user-menu {
  position: relative;
  
  &__trigger {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 12px 6px 6px;
    background: transparent;
    border: 1px solid transparent;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: #F5F5F5;
    }
  }
  
  &__avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    background: #E9EAEB;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &__name {
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    
    @media (max-width: 600px) {
      display: none;
    }
  }
  
  &__arrow {
    color: #535862;
    transition: transform 0.2s ease;
    
    &.rotated {
      transform: rotate(180deg);
    }
  }
  
  &__dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 200px;
    background: #FFFFFF;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    border: 1px solid #E9EAEB;
    overflow: hidden;
    animation: dropdownSlide 0.2s ease;
    z-index: 1001;
  }
  
  &__item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 16px;
    background: transparent;
    border: none;
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    
    svg {
      color: #717680;
    }
    
    &:hover {
      background: #F5F9FB;
      color: #181D27;
      
      svg {
        color: #0D436B;
      }
    }
    
    &--logout {
      color: #DC2626;
      
      svg {
        color: #DC2626;
      }
      
      &:hover {
        background: #FEF2F2;
        color: #DC2626;
        
        svg {
          color: #DC2626;
        }
      }
    }
  }
  
  &__divider {
    height: 1px;
    background: #E9EAEB;
    margin: 4px 0;
  }
}

@keyframes dropdownSlide {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## shared/components/navbar/navbar.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/navbar/navbar.component.ts`

```ts
import { Component, inject, signal, computed, input, HostListener, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AuthActions } from '../../../core/store/auth/auth.actions';
import { selectUser } from '../../../core/store/auth/auth.selectors';

/** 
 * Type for the page context
 */
export type NavbarPageType = 'customer' | 'expert' | 'admin';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit, OnDestroy {
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly destroy$ = new Subject<void>();

  /**
   * Page type determines the context of the navbar
   * @default 'customer'
   */
  @Input() pageType: NavbarPageType = 'customer';

  /**
   * Event emitted when user clicks logout
   */
  @Output() logoutClicked = new EventEmitter<void>();

  isUserMenuOpen = signal(false);
  private currentUserName = signal<string>('John Doe');

  userName = computed(() => this.currentUserName());

  userAvatar = computed(() => {
    return 'assets/images/default-avatar.png';
  });

  ngOnInit(): void {
    // Subscribe to user from NgRx store
    this.store.select(selectUser).pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      if (user) {
        this.currentUserName.set(user.name || 'John Doe');
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen.update(v => !v);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.user-menu')) {
      this.isUserMenuOpen.set(false);
    }
  }

  logout(): void {
    this.logoutClicked.emit();
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/login']);
  }
}
```

---

## shared/components/payment-modal/payment-modal.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/payment-modal/payment-modal.component.html`

```html
<!-- Payment Modal - Matching Figma Exactly -->
@if (isOpen()) {
  <div class="payment-modal-overlay" (click)="onBackdropClick($event)">
    <div class="payment-modal">
      <!-- Header -->
      <div class="payment-modal__header">
        <h2 class="payment-modal__title">PAYMENT</h2>
        <button class="payment-modal__close" (click)="onClose()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <!-- Payment Tabs -->
      <div class="payment-tabs">
        <button 
          class="payment-tabs__tab" 
          [class.active]="activeTab() === 'card'"
          (click)="setActiveTab('card')">
          Card Payment
        </button>
        <button 
          class="payment-tabs__tab" 
          [class.active]="activeTab() === 'upi'"
          (click)="setActiveTab('upi')">
          UPI Payment
        </button>
        <button 
          class="payment-tabs__tab" 
          [class.active]="activeTab() === 'netbanking'"
          (click)="setActiveTab('netbanking')">
          Net Banking
        </button>
      </div>

      <!-- Tab Content -->
      <div class="payment-modal__content">
        @if (activeTab() === 'card') {
          <div class="card-payment-form">
            <!-- Card Number -->
            <div class="form-group">
              <label class="form-label">Card Number</label>
              <input 
                type="text" 
                class="form-input"
                placeholder="1234 5678 9012 3456"
                [value]="cardNumber()"
                (input)="formatCardNumber($event)"
                maxlength="19"
              />
            </div>

            <!-- Cardholder Name -->
            <div class="form-group">
              <label class="form-label">Cardholder Name</label>
              <input 
                type="text" 
                class="form-input"
                placeholder="John Doe"
                [value]="cardholderName()"
                (input)="cardholderName.set($any($event.target).value)"
              />
            </div>

            <!-- Expiry and CVV Row -->
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Expiry Date</label>
                <input 
                  type="text" 
                  class="form-input"
                  placeholder="MM/YY"
                  [value]="expiryDate()"
                  (input)="formatExpiryDate($event)"
                  maxlength="5"
                />
              </div>
              <div class="form-group">
                <label class="form-label">CVV</label>
                <input 
                  type="password" 
                  class="form-input"
                  placeholder="123"
                  [value]="cvv()"
                  (input)="formatCvv($event)"
                  maxlength="3"
                />
              </div>
            </div>

            <!-- Security Note -->
            <div class="security-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span>Your card details are encrypted and secure</span>
            </div>
          </div>
        } @else if (activeTab() === 'upi') {
          <div class="upi-payment-form">
            <div class="form-group">
              <label class="form-label">UPI ID</label>
              <input 
                type="text" 
                class="form-input"
                placeholder="yourname@upi"
              />
            </div>
            <p class="upi-info">Enter your UPI ID to receive payment request</p>
          </div>
        } @else if (activeTab() === 'netbanking') {
          <div class="netbanking-form">
            <p class="netbanking-info">Select your bank to proceed with payment</p>
            <div class="bank-list">
              <button class="bank-option">HDFC Bank</button>
              <button class="bank-option">ICICI Bank</button>
              <button class="bank-option">SBI</button>
              <button class="bank-option">Axis Bank</button>
            </div>
          </div>
        }
      </div>

      <!-- Pay Button -->
      <button 
        class="payment-modal__pay-btn"
        [disabled]="!isFormValid() || isProcessing()"
        (click)="processPayment()">
        @if (isProcessing()) {
          <span class="spinner"></span>
          Processing...
        } @else {
          Pay ₹{{ totalAmount() | number:'1.2-2' }}
        }
      </button>
    </div>
  </div>
}
```

---

## shared/components/payment-modal/payment-modal.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/payment-modal/payment-modal.component.scss`

```scss
/* Payment Modal Styles - Matching Figma Exactly */

.payment-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}

.payment-modal {
  background: #FFFFFF;
  border-radius: 16px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease;
  
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 24px 16px;
    border-bottom: 1px solid #E9EAEB;
  }
  
  &__title {
    color: #0D436B;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0;
  }
  
  &__close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #535862;
    transition: all 0.2s ease;
    
    &:hover {
      background: #F5F5F5;
      color: #181D27;
    }
  }
  
  &__content {
    padding: 24px;
  }
  
  &__pay-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: calc(100% - 48px);
    margin: 0 24px 24px;
    padding: 16px 32px;
    background: #0D436B;
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover:not(:disabled) {
      background: #0a3555;
    }
    
    &:disabled {
      background: #A0AEC0;
      cursor: not-allowed;
    }
    
    .spinner {
      width: 20px;
      height: 20px;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-top-color: #FFFFFF;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
  }
}

/* Payment Tabs */
.payment-tabs {
  display: flex;
  gap: 0;
  padding: 0 24px;
  border-bottom: 1px solid #E9EAEB;
  
  &__tab {
    flex: 1;
    padding: 16px 8px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: #717680;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      color: #181D27;
    }
    
    &.active {
      color: #0D436B;
      border-bottom-color: #0D436B;
      font-weight: 600;
    }
  }
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &::placeholder {
    color: #A0AEC0;
  }
  
  &:focus {
    outline: none;
    border-color: #0D436B;
    box-shadow: 0 0 0 3px rgba(13, 67, 107, 0.1);
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

/* Security Note */
.security-note {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: #F5F9FB;
  border-radius: 8px;
  margin-top: 8px;
  
  svg {
    color: #717680;
    flex-shrink: 0;
  }
  
  span {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    font-weight: 400;
  }
}

/* UPI Payment Form */
.upi-payment-form {
  .upi-info {
    color: #717680;
    font-family: 'Open Sans', sans-serif;
    font-size: 13px;
    margin-top: -8px;
  }
}

/* Net Banking Form */
.netbanking-form {
  .netbanking-info {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    margin-bottom: 16px;
  }
}

.bank-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.bank-option {
  padding: 14px 16px;
  background: #FFFFFF;
  border: 1px solid #E9EAEB;
  border-radius: 8px;
  color: #181D27;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0D436B;
    background: #F5F9FB;
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## shared/components/payment-modal/payment-modal.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/payment-modal/payment-modal.component.ts`

```ts
import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface PaymentData {
  cardNumber: string;
  cardholderName: string;
  expiryDate: string;
  cvv: string;
}

@Component({
  selector: 'app-payment-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-modal.component.html',
  styleUrl: './payment-modal.component.scss'
})
export class PaymentModalComponent {
  isOpen = input<boolean>(false);
  totalAmount = input<number>(590);
  
  closeModal = output<void>();
  paymentComplete = output<PaymentData>();

  activeTab = signal<'card' | 'upi' | 'netbanking'>('card');
  
  cardNumber = signal('');
  cardholderName = signal('');
  expiryDate = signal('');
  cvv = signal('');
  
  isProcessing = signal(false);

  setActiveTab(tab: 'card' | 'upi' | 'netbanking'): void {
    this.activeTab.set(tab);
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\s/g, '').replace(/\D/g, '');
    value = value.substring(0, 16);
    const formatted = value.replace(/(.{4})/g, '$1 ').trim();
    this.cardNumber.set(formatted);
  }

  formatExpiryDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    this.expiryDate.set(value);
  }

  formatCvv(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, '').substring(0, 3);
    this.cvv.set(value);
  }

  onClose(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('payment-modal-overlay')) {
      this.onClose();
    }
  }

  isFormValid(): boolean {
    return (
      this.cardNumber().replace(/\s/g, '').length === 16 &&
      this.cardholderName().trim().length > 0 &&
      this.expiryDate().length === 5 &&
      this.cvv().length === 3
    );
  }

  processPayment(): void {
    if (!this.isFormValid()) return;
    
    this.isProcessing.set(true);
    
    // Simulate payment processing
    setTimeout(() => {
      this.isProcessing.set(false);
      this.paymentComplete.emit({
        cardNumber: this.cardNumber(),
        cardholderName: this.cardholderName(),
        expiryDate: this.expiryDate(),
        cvv: this.cvv()
      });
    }, 2000);
  }
}
```

---

## shared/components/payment-success-modal/payment-success-modal.component.html

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/payment-success-modal/payment-success-modal.component.html`

```html
<!-- Payment Success Modal - Matching Figma Exactly -->
@if (isOpen()) {
  <div class="success-modal-overlay" (click)="onBackdropClick($event)">
    <div class="success-modal">
      <!-- Close Button -->
      <button class="success-modal__close" (click)="onClose()">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>

      <!-- Success Illustration -->
      <div class="success-modal__illustration">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
          <!-- Card with checkmark -->
          <rect x="30" y="50" width="80" height="55" rx="8" fill="#3B82F6"/>
          <rect x="38" y="62" width="30" height="4" rx="2" fill="#93C5FD"/>
          <rect x="38" y="70" width="20" height="4" rx="2" fill="#93C5FD"/>
          <rect x="38" y="78" width="25" height="4" rx="2" fill="#93C5FD"/>
          <rect x="38" y="86" width="15" height="4" rx="2" fill="#93C5FD"/>
          
          <!-- Chip -->
          <rect x="74" y="62" width="28" height="20" rx="3" fill="#FCD34D"/>
          <line x1="74" y1="68" x2="102" y2="68" stroke="#F59E0B" stroke-width="1"/>
          <line x1="74" y1="74" x2="102" y2="74" stroke="#F59E0B" stroke-width="1"/>
          <line x1="86" y1="62" x2="86" y2="82" stroke="#F59E0B" stroke-width="1"/>
          
          <!-- Phone/Device behind -->
          <rect x="55" y="35" width="70" height="100" rx="10" fill="#E0F2FE" stroke="#3B82F6" stroke-width="2"/>
          
          <!-- Checkmark circle -->
          <circle cx="100" cy="100" r="25" fill="#10B981"/>
          <path d="M88 100L96 108L112 92" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          
          <!-- Decorative elements -->
          <circle cx="130" cy="45" r="12" fill="#FCD34D"/>
          <path d="M126 45L130 41L134 45L130 49L126 45Z" fill="#F59E0B"/>
          
          <!-- Sparkles -->
          <circle cx="45" cy="40" r="4" fill="#FCD34D"/>
          <circle cx="125" cy="75" r="3" fill="#10B981"/>
          <circle cx="35" cy="85" r="3" fill="#3B82F6"/>
        </svg>
      </div>

      <!-- Success Message -->
      <h2 class="success-modal__title">Payment was Successful</h2>
      <p class="success-modal__message">
        Soon you will get confirmation on the service address and futher details.
      </p>

      <!-- Amount Paid -->
      <div class="success-modal__amount">
        <span class="amount">₹{{ amountPaid() | number:'1.2-2' }}</span>
        <span class="label">Paid</span>
      </div>
    </div>
  </div>
}
```

---

## shared/components/payment-success-modal/payment-success-modal.component.scss

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/payment-success-modal/payment-success-modal.component.scss`

```scss
/* Payment Success Modal Styles - Matching Figma Exactly */

.success-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  animation: fadeIn 0.2s ease;
}

.success-modal {
  position: relative;
  background: #FFFFFF;
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  padding: 32px 40px 40px;
  text-align: center;
  animation: scaleIn 0.3s ease;
  
  &__close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #535862;
    transition: all 0.2s ease;
    
    &:hover {
      background: #F5F5F5;
      color: #181D27;
    }
  }
  
  &__illustration {
    margin-bottom: 24px;
    
    svg {
      width: 160px;
      height: 160px;
    }
  }
  
  &__title {
    color: #181D27;
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 12px;
  }
  
  &__message {
    color: #535862;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin: 0 0 24px;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }
  
  &__amount {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 8px;
    
    .amount {
      color: #0D9488;
      font-family: 'Open Sans', sans-serif;
      font-size: 28px;
      font-weight: 700;
    }
    
    .label {
      color: #0D9488;
      font-family: 'Open Sans', sans-serif;
      font-size: 18px;
      font-weight: 600;
    }
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## shared/components/payment-success-modal/payment-success-modal.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/payment-success-modal/payment-success-modal.component.ts`

```ts
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payment-success-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-success-modal.component.html',
  styleUrl: './payment-success-modal.component.scss'
})
export class PaymentSuccessModalComponent {
  isOpen = input<boolean>(false);
  amountPaid = input<number>(590);
  
  closeModal = output<void>();

  onClose(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('success-modal-overlay')) {
      this.onClose();
    }
  }
}
```

---

## shared/components/toast/toast.component.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/components/toast/toast.component.ts`

```ts
import { Component, inject, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Notification, NotificationType, NotificationService } from '../../../core/services/notification.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast-container">
      @for (notification of notificationService.notifications(); track notification.id) {
        <div 
          class="toast"
          [class]="'toast--' + notification.type"
        >
          <div class="toast__icon">
            @switch (notification.type) {
              @case ('success') {
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M8 12L11 15L16 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              }
              @case ('error') {
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              }
              @case ('warning') {
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 9V13M12 17H12.01M10.29 3.86L1.82 18A2 2 0 003.54 21H20.46A2 2 0 0022.18 18L13.71 3.86A2 2 0 0010.29 3.86Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              }
              @case ('info') {
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              }
            }
          </div>
          <div class="toast__content">
            <h4 class="toast__title">{{ notification.title }}</h4>
            <p class="toast__message">{{ notification.message }}</p>
          </div>
          @if (notification.dismissible) {
            <button class="toast__close" (click)="dismiss(notification.id)" aria-label="Dismiss">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .toast-container {
      position: fixed;
      top: 24px;
      right: 24px;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 12px;
      max-width: 400px;
      width: 100%;
      pointer-events: none;
    }

    .toast {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 16px;
      border-radius: 12px;
      background: white;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      pointer-events: auto;
      animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }

    .toast__icon {
      flex-shrink: 0;
      width: 24px;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
      }
    }

    .toast__content {
      flex: 1;
      min-width: 0;
    }

    .toast__title {
      margin: 0 0 4px;
      font-size: 14px;
      font-weight: 600;
      color: #1F2937;
    }

    .toast__message {
      margin: 0;
      font-size: 13px;
      color: #6B7280;
      line-height: 1.4;
    }

    .toast__close {
      flex-shrink: 0;
      width: 20px;
      height: 20px;
      padding: 0;
      border: none;
      background: transparent;
      cursor: pointer;
      color: #9CA3AF;
      transition: color 0.2s;

      &:hover {
        color: #4B5563;
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    // Type variants
    .toast--success {
      border-left: 4px solid #10B981;

      .toast__icon {
        color: #10B981;
      }
    }

    .toast--error {
      border-left: 4px solid #EF4444;

      .toast__icon {
        color: #EF4444;
      }
    }

    .toast--warning {
      border-left: 4px solid #F59E0B;

      .toast__icon {
        color: #F59E0B;
      }
    }

    .toast--info {
      border-left: 4px solid #3B82F6;

      .toast__icon {
        color: #3B82F6;
      }
    }

    @media (max-width: 480px) {
      .toast-container {
        top: 16px;
        right: 16px;
        left: 16px;
        max-width: none;
      }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToastComponent {
  readonly notificationService = inject(NotificationService);

  dismiss(id: string): void {
    this.notificationService.dismiss(id);
  }
}
```

---

## shared/pipes/booking-status.pipe.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/pipes/booking-status.pipe.ts`

```ts
import { Pipe, PipeTransform } from '@angular/core';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled' | 'rejected';

@Pipe({
  name: 'bookingStatus',
  standalone: true
})
export class BookingStatusPipe implements PipeTransform {
  private statusLabels: Record<BookingStatus, string> = {
    'pending': 'Upcoming',
    'confirmed': 'Upcoming',
    'completed': 'Completed',
    'cancelled': 'Cancelled',
    'rejected': 'Rejected'
  };

  private statusClasses: Record<BookingStatus, string> = {
    'pending': 'status--upcoming',
    'confirmed': 'status--upcoming',
    'completed': 'status--completed',
    'cancelled': 'status--cancelled',
    'rejected': 'status--rejected'
  };

  transform(value: string, type: 'label' | 'class' = 'label'): string {
    if (!value) return '';
    
    const status = value as BookingStatus;
    
    if (type === 'class') {
      return this.statusClasses[status] || '';
    }
    
    return this.statusLabels[status] || value;
  }
}
```

---

## shared/pipes/currency-inr.pipe.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/pipes/currency-inr.pipe.ts`

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyInr',
  standalone: true
})
export class CurrencyInrPipe implements PipeTransform {
  transform(value: number | string, showSymbol: boolean = true, decimalPlaces: number = 0): string {
    if (value === null || value === undefined) return '';
    
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    
    if (isNaN(numValue)) return '';
    
    // Format with Indian number system (lakhs, crores)
    const formatted = numValue.toLocaleString('en-IN', {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces
    });
    
    return showSymbol ? `₹${formatted}` : formatted;
  }
}
```

---

## shared/pipes/date-format.pipe.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/pipes/date-format.pipe.ts`

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {
  private months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  private days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  transform(value: string | Date, format: 'short' | 'long' | 'full' = 'short'): string {
    if (!value) return '';
    
    const date = typeof value === 'string' ? new Date(value) : value;
    
    if (isNaN(date.getTime())) return '';
    
    const day = date.getDate();
    const month = this.months[date.getMonth()];
    const year = date.getFullYear();
    const dayName = this.days[date.getDay()];
    
    switch (format) {
      case 'short':
        // "20 Jan 2026"
        return `${day} ${month} ${year}`;
      case 'long':
        // "31 Jan, Wednesday"
        return `${day} ${month}, ${dayName}`;
      case 'full':
        // "Wednesday, 31 January 2026"
        const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 
                           'July', 'August', 'September', 'October', 'November', 'December'];
        return `${dayName}, ${day} ${fullMonths[date.getMonth()]} ${year}`;
      default:
        return `${day} ${month} ${year}`;
    }
  }
}
```

---

## shared/pipes/index.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/pipes/index.ts`

```ts
// Shared Pipes - Export all pipes from one location

export * from './date-format.pipe';
export * from './time-format.pipe';
export * from './phone-format.pipe';
export * from './currency-inr.pipe';
export * from './booking-status.pipe';
export * from './truncate.pipe';
```

---

## shared/pipes/phone-format.pipe.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/pipes/phone-format.pipe.ts`

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string, format: 'display' | 'link' = 'display'): string {
    if (!value) return '';
    
    // Remove all non-digit characters except + at the start
    const cleanNumber = value.replace(/[^\d+]/g, '');
    
    if (format === 'link') {
      return cleanNumber;
    }
    
    // Format for display
    // Handle Indian numbers: +91 XXXXX XXXXX
    if (cleanNumber.startsWith('+91') && cleanNumber.length === 13) {
      return `+91 ${cleanNumber.slice(3, 8)} ${cleanNumber.slice(8)}`;
    }
    
    // Handle 10-digit numbers
    if (cleanNumber.length === 10) {
      return `+91 ${cleanNumber.slice(0, 5)} ${cleanNumber.slice(5)}`;
    }
    
    // Return original if no format matches
    return value;
  }
}
```

---

## shared/pipes/time-format.pipe.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/pipes/time-format.pipe.ts`

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {
  transform(value: string, format: '12h' | '24h' = '12h'): string {
    if (!value) return '';
    
    const [hours, minutes] = value.split(':').map(Number);
    
    if (format === '24h') {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }
    
    // 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    return `${hour12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  }
}
```

---

## shared/pipes/truncate.pipe.ts

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/pipes/truncate.pipe.ts`

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 50, ellipsis: string = '...'): string {
    if (!value) return '';
    
    if (value.length <= limit) {
      return value;
    }
    
    return value.slice(0, limit).trim() + ellipsis;
  }
}
```

---

## shared/utils/example.py

- Absolute path: `/Users/suhas/Desktop/angular/housemate/src/app/shared/utils/example.py`

```py
# Code Generated by Sidekick is for learning and experimentation purposes only.
from pathlib import Path

SRC_PATH = r"housemate/src/app"  # <-- adjust this path as needed   
OUTPUT_README = "README_DUMP.md"  # <-- output file name

root = Path(SRC_PATH).resolve()
out = root / OUTPUT_README

# Folders to skip (common in JS/Angular repos)
SKIP_DIRS = {".git", "node_modules", "dist", "build", ".angular", ".cache", "coverage", ".vscode", ".idea"}

def should_skip(path: Path) -> bool:
    return any(part in SKIP_DIRS for part in path.parts)

all_files = sorted(
    [p for p in root.rglob("*") if p.is_file() and not should_skip(p)],
    key=lambda p: str(p.relative_to(root)).lower(),
)

with out.open("w", encoding="utf-8") as f:
    f.write(f"# src file dump\n\nRoot: `{root}`\n\n---\n\n")

    for p in all_files:
        if p == out:
            continue

        rel = p.relative_to(root)

        # Read as text where possible; if binary-ish, still include a note
        try:
            content = p.read_text(encoding="utf-8", errors="replace")
            is_text = True
        except Exception:
            content = ""
            is_text = False

        f.write(f"## {rel.as_posix()}\n\n")
        f.write(f"- Absolute path: `{p.resolve()}`\n\n")

        if is_text:
            ext = p.suffix.lstrip(".") or "text"
            f.write(f"```{ext}\n")
            f.write(content)
            if not content.endswith("\n"):
                f.write("\n")
            f.write("```\n\n---\n\n")
        else:
            f.write("_Binary or unreadable as UTF-8 text; skipped content._\n\n---\n\n")

print(f"Created: {out}")

```

---

