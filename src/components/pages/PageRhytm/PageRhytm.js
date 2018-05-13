import React, { Component } from 'react';

export default class PageRhytm extends Component {
  render() {
    return (
      <div className="PageRhytm">
        <h1 className="fs_56">Vertical rhythm</h1>
        <hr className="hr_64" />

        <p className="fs_16">
            The main idea is to make a grid of rows with a 64px height of each. This size is the most preferable.
        </p>
        <p className="fs_24">
            Height of everything on the page should be divisible by 64.
        </p>
        <p className="fs_16">
            Sometimes, it is not possible: e.g., 64px is a too big line-height for a 16px font-size.<br />
            One line of that text perfectly fits to a 64px cell, but even number of lines will not be rhythmed with a 64px grid (2 lines have a 96px height)
        </p>
        <p className="fs_32">
            Line-heights are discrete: 16px, 32px, 64px.
        </p>
        <p className="fs_16">
            Line height is NOT a computed value based on the font-size as usual.<br />
            Instead, there are 3 allowed line-heights with a range of suitable font sizes:<br />
        </p>

        <table className="table_16">
          <tbody>
            <tr>
              <td><b>16px:</b></td>
              <td>12, 14 px font sizes</td>
            </tr>
            <tr>
              <td><b>32px:</b></td>
              <td>16&ndash;24 px font sizes</td>
            </tr>
            <tr>
              <td><b>64px:</b></td>
              <td>20&ndash;56 px font sizes</td>
            </tr>
          </tbody>
        </table>

        <p className="fs_16">
          16px is the minimal possible line height. It is acceptable for a 14px font size and less.<br />
          <span className="fs_12">I also {"don't"} recomment do use a size less than 12px.</span><br />
          Also, 16px is the most commonly used font size and looks more readable with a 32px line height.<br />
          Text with 64px line height will be always rhythmed with other elements.<br />
          Comparison:
        </p>

        <div className="columns">
          <div className="col">
            <p className="fs_56">
                56px
            </p>
            <p className="fs_56">
                56px<br />56px
            </p>
            <p className="fs_48">
                48px
            </p>
            <p className="fs_48">
                48px<br />48px
            </p>
            <p className="fs_40">
                40px
            </p>
            <p className="fs_40">
                40px<br />40px
            </p>
            <p className="fs_32">
              32px
            </p>
            <p className="fs_32">
              32px<br />32px<br />32px
            </p>
          </div>
          <div className="col">
            <p className="fs_48">
                48px
            </p>
            <p className="fs_48">
                48px<br />48px
            </p>
            <p className="fs_40">
                40px
            </p>
            <p className="fs_40">
                40px<br />40px
            </p>
            <p className="fs_32">
              32px
            </p>
            <p className="fs_32">
              32px<br />32px
            </p>
            <p className="fs_24">
                24px
            </p>
            <p className="fs_24">
                24px<br />24px<br />24px
            </p>
            <p className="fs_20">
                20px
            </p>
            <p className="fs_20">
                20px<br />20px<br />20px
            </p>
          </div>
          <div className="col">
            <p className="fs_40">
                40px
            </p>
            <p className="fs_40">
                40px<br />40px
            </p>
            <p className="fs_32">
              32px
            </p>
            <p className="fs_32">
              32px<br />32px
            </p>
            <p className="fs_24_hi">
                24px
            </p>
            <p className="fs_24">
                24px
            </p>
            <p className="fs_24">
                24px<br />24px<br />24px
            </p>
            <p className="fs_20_hi">
                20px
            </p>
            <p className="fs_20">
                20px
            </p>
            <p className="fs_20">
                20px<br />20px<br />20px
            </p>
            <p className="fs_18">
                18px
            </p>
            <p className="fs_18">
                18px<br />18px<br />18px
            </p>
          </div>
          <div className="col">
            <p className="fs_32">
              32px
            </p>
            <p className="fs_32">
              32px<br />32px
            </p>
            <p className="fs_24">
                24px
            </p>
            <p className="fs_24">
                24px<br />24px<br />24px
            </p>
            <p className="fs_20">
                20px
            </p>
            <p className="fs_20">
                20px<br />20px<br />20px
            </p>
            <p className="fs_18">
                18px
            </p>
            <p className="fs_18">
                18px<br />18px<br />18px
            </p>
            <p className="fs_16">
                16px
            </p>
            <p className="fs_16">
                16px<br />16px<br />16px
            </p>
            <p className="fs_14">
                14px
            </p>
            <p className="fs_14">
                14px<br />14px<br />14px<br />14px
            </p>
            <p className="fs_12">
                12px
            </p>
            <p className="fs_12">
                12px<br />12px<br />12px<br />12px<br />12px
            </p>
          </div>
        </div>

        <p className="fs_24">
            Every text block have paddings depend on the font size.
        </p>
        <p className="fs_16">
            Top padding moves baseline to closest grid line.<br />
            Bottom padding is needed to make total height of block divisible by 32 or 64 px.<br />
            Some presets have a negative top or bottom margin.
        </p>

        <h2 className="fs_40">Examples</h2>
        <div style={{ maxWidth: '800px', margin: 'auto', textAlign: 'left' }}>
          <p className="fs_24"><b>24px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
          <p className="fs_24"><b>24px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
          <p className="fs_20"><b>20px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
          <p className="fs_20"><b>20px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
          <p className="fs_18"><b>18px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
          <p className="fs_18"><b>18px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
          <p className="fs_16"><b>16px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
          <p className="fs_16"><b>16px</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit cumque, amet ratione delectus laudantium, ipsum quos nobis ullam dolore vitae soluta, excepturi, fugiat deserunt laborum iste! Voluptatibus reprehenderit deserunt perspiciatis!</p>
        </div>
      </div>
    );
  }
}
