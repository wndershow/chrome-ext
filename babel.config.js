module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    [
      'styled-jsx/babel',
      {
        plugins: [
          [
            'styled-jsx-plugin-sass',
            {
              sassOptions: {
                includePaths: ['./them.scss'],
                precision: 2,
              },
            },
          ],
        ],
      },
    ],
  ],
};
