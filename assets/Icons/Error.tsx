import * as React from "react";
import { SVGProps } from "react";

const Error = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={88}
    height={129}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.05 23.81c0-.66.09-1.25.27-1.77.18-.52.47-1.01.87-1.47.42-.46.97-.93 1.65-1.41.6-.44 1.08-.83 1.44-1.17.38-.34.65-.68.81-1.02.18-.34.27-.72.27-1.14 0-.64-.24-1.12-.72-1.44-.46-.34-1.11-.51-1.95-.51-.84 0-1.67.13-2.49.39-.82.26-1.66.61-2.52 1.05l-1.59-3.21c.98-.54 2.04-.98 3.18-1.32 1.14-.34 2.39-.51 3.75-.51 2.08 0 3.69.5 4.83 1.5 1.16 1 1.74 2.27 1.74 3.81 0 .82-.13 1.53-.39 2.13-.26.6-.65 1.16-1.17 1.68-.52.5-1.17 1.04-1.95 1.62-.58.42-1.03.78-1.35 1.08-.32.3-.54.59-.66.87-.1.28-.15.63-.15 1.05v.87h-3.87v-1.08Zm-.48 6.09c0-.92.25-1.56.75-1.92.5-.38 1.11-.57 1.83-.57.7 0 1.3.19 1.8.57.5.36.75 1 .75 1.92 0 .88-.25 1.52-.75 1.92-.5.38-1.1.57-1.8.57-.72 0-1.33-.19-1.83-.57-.5-.4-.75-1.04-.75-1.92Zm14.777-6.09c0-.66.09-1.25.27-1.77.18-.52.47-1.01.87-1.47.42-.46.97-.93 1.65-1.41.6-.44 1.08-.83 1.44-1.17.38-.34.65-.68.81-1.02.18-.34.27-.72.27-1.14 0-.64-.24-1.12-.72-1.44-.46-.34-1.11-.51-1.95-.51-.84 0-1.67.13-2.49.39-.82.26-1.66.61-2.52 1.05l-1.59-3.21c.98-.54 2.04-.98 3.18-1.32 1.14-.34 2.39-.51 3.75-.51 2.08 0 3.69.5 4.83 1.5 1.16 1 1.74 2.27 1.74 3.81 0 .82-.13 1.53-.39 2.13-.26.6-.65 1.16-1.17 1.68-.52.5-1.17 1.04-1.95 1.62-.58.42-1.03.78-1.35 1.08-.32.3-.54.59-.66.87-.1.28-.15.63-.15 1.05v.87h-3.87v-1.08Zm-.48 6.09c0-.92.25-1.56.75-1.92.5-.38 1.11-.57 1.83-.57.7 0 1.3.19 1.8.57.5.36.75 1 .75 1.92 0 .88-.25 1.52-.75 1.92-.5.38-1.1.57-1.8.57-.72 0-1.33-.19-1.83-.57-.5-.4-.75-1.04-.75-1.92Zm14.777-6.09c0-.66.09-1.25.27-1.77.18-.52.47-1.01.87-1.47.42-.46.97-.93 1.65-1.41.6-.44 1.08-.83 1.44-1.17.38-.34.65-.68.81-1.02.18-.34.27-.72.27-1.14 0-.64-.24-1.12-.72-1.44-.46-.34-1.11-.51-1.95-.51-.84 0-1.67.13-2.49.39-.82.26-1.66.61-2.52 1.05l-1.59-3.21c.98-.54 2.04-.98 3.18-1.32 1.14-.34 2.39-.51 3.75-.51 2.08 0 3.69.5 4.83 1.5 1.16 1 1.74 2.27 1.74 3.81 0 .82-.13 1.53-.39 2.13-.26.6-.65 1.16-1.17 1.68-.52.5-1.17 1.04-1.95 1.62-.58.42-1.03.78-1.35 1.08-.32.3-.54.59-.66.87-.1.28-.15.63-.15 1.05v.87h-3.87v-1.08Zm-.48 6.09c0-.92.25-1.56.75-1.92.5-.38 1.11-.57 1.83-.57.7 0 1.3.19 1.8.57.5.36.75 1 .75 1.92 0 .88-.25 1.52-.75 1.92-.5.38-1.1.57-1.8.57-.72 0-1.33-.19-1.83-.57-.5-.4-.75-1.04-.75-1.92ZM80.31 94.684V80.609h-1.661c-7.029 0-13.298 1.142-18.457 2.609a91.243 91.243 0 0 0-1.94-3.473c.282-.24.561-.485.83-.736 3.952-3.705 6.404-8.841 6.402-14.5.003-5.66-2.45-10.796-6.402-14.5C55.129 46.297 49.652 44 43.619 44c-6.033 0-11.51 2.297-15.46 6.01-3.953 3.703-6.405 8.84-6.405 14.499 0 5.659 2.451 10.795 6.404 14.5.269.252.545.5.829.736a87.961 87.961 0 0 0-1.942 3.473C21.884 81.751 15.62 80.61 8.591 80.61H6.93v14.074C1.918 94.77 0 98.648 0 103.42c0 4.774 1.918 8.651 6.93 8.738v11.203l1.6.052h.045c.502.017 5.068.201 11.255.978 6.185.775 13.992 2.151 20.93 4.515l.274.093h5.172l.273-.093c7.16-2.44 15.251-3.826 21.523-4.587 3.14-.38 5.823-.608 7.72-.74.948-.066 1.7-.107 2.212-.135.255-.011.449-.021.582-.025.063-.003.114-.006.143-.006h.048l1.602-.052v-11.203c5.013-.091 6.925-3.964 6.925-8.738 0-4.773-1.912-8.647-6.925-8.737ZM7.108 109.048c-.056 0-.115 0-.178-.002-1.14-.011-3.61-.292-3.61-5.625 0-5.334 2.47-5.614 3.61-5.624.063-.004.122-.004.178-.004 1.15 0 2.226.31 3.14.837 1.716.99 2.858 2.768 2.858 4.791 0 2.024-1.142 3.801-2.858 4.79-.914.53-1.99.837-3.14.837Zm32.018-17.525v33.579c-6.742-2.013-13.82-3.179-19.467-3.87-4.16-.506-7.536-.744-9.411-.851v-8.728c3.604-1.211 6.178-4.437 6.178-8.232 0-3.794-2.574-7.022-6.178-8.231V83.748c8.649.231 16.018 2.247 21.31 4.271a58.482 58.482 0 0 1 6.545 2.944c.388.207.73.394 1.023.56Zm6.77 34.274a9.227 9.227 0 0 0-.265.09h-4.024a5.812 5.812 0 0 0-.268-.09V92.542h4.558v33.255ZM43.62 81.965c-5.058 0-9.63-1.885-12.982-4.95a17.42 17.42 0 0 1-4.38-6.215c3.267-.577 6.268-1.733 8.946-3.159 4.513-2.399 8.129-5.554 10.636-8.11a48.954 48.954 0 0 0 2.606-2.87 112.251 112.251 0 0 0 4.415 5.032c1.613 1.723 3.4 3.5 5.175 4.977.885.74 1.77 1.405 2.646 1.954.297.184.592.35.887.509-.863 2.96-2.534 5.607-4.787 7.72-.06.055-.119.112-.18.166-3.358 3.065-7.93 4.946-12.982 4.946ZM76.99 120.38c-1.875.107-5.251.345-9.417.851-5.642.687-12.719 1.857-19.46 3.87h-.003V91.52h.002c1.446-.814 4.1-2.186 7.699-3.553 5.28-2.003 12.6-3.991 21.18-4.22V95.19c-3.605 1.21-6.182 4.437-6.182 8.231 0 3.795 2.577 7.021 6.181 8.232v8.728Zm3.318-11.335c-.066.002-.124.002-.18.002a6.245 6.245 0 0 1-3.138-.833c-1.716-.993-2.863-2.77-2.863-4.794 0-2.023 1.147-3.801 2.864-4.794a6.254 6.254 0 0 1 3.317-.83c1.142.014 3.608.298 3.608 5.624 0 5.327-2.466 5.611-3.608 5.625Z"
      fill="#347EFF"
    />
    <path
      d="M36.428 72.81c1.222 0 2.213-.93 2.213-2.075 0-1.147-.991-2.076-2.213-2.076s-2.213.93-2.213 2.076.99 2.075 2.213 2.075ZM50.81 72.81c1.222 0 2.212-.93 2.212-2.075 0-1.147-.99-2.076-2.213-2.076-1.222 0-2.213.93-2.213 2.076s.991 2.075 2.213 2.075Z"
      fill="#347EFF"
    />
  </svg>
);

export default Error;