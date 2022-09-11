module.exports = {

    corePlugins: {
      float: false,
    },
  
    purge: {
      enabled: true,
      content: [
        {
          raw: '<html><body><div class="app"></div></body></html>',
          extension: 'html'
        },
        'src/components/app-profile/app-profile.tsx',
        'src/components/app-home/app-home.tsx',
      ],
      css: [
        {
          raw: 'body { margin: 0 }'
        },
        'src/global/app.css'
      ],
      keyframes: true,
      whitelist: ['random', 'yep', 'button'],
      rejected: true,
      variables: true,
    },
  
      theme: {
        extend: {
          colors: {
            'brand-pink': {
              100: '#FFE8F1',
              200: '#FEC4DC',
              300: '#FEA1C7',
              400: '#FD5B9E',
              500: '#FC1474',
              600: '#E31268',
              700: '#970C46',
              800: '#710934',
              900: '#4C0623',
              },
          },
          spacing: {
            '72': '18rem',
          }
        },
      },
      variants: {
        backgroundColor:['responsive', 'hover', 'focus', 'active'],
        fontSize: ['responsive','hover']
      },
      plugins: [],
    }
    