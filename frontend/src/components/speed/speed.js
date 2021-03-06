import React, { Component } from 'react';
// import Timer from '../timer/Timer'
import emptyHeart from './empty-heart.png'
var Prism = require('prismjs');
export class Speed extends Component {
    constructor(props) {
      window.enemyHearts = 1
      window.hearts = 1
      window.isFull = true
      super(props);
      this.state={ hearts: 6, highlight: "highlight",prompt: prompt, innerHTML: '', new_state: '', index: 0, length: 0, errors: 0, __html: ''}
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.myMove = this.myMove.bind(this)
      this.hisMove = this.hisMove.bind(this)
    }

    myMove() {
      // var rock = document.getElementById("rock");
      var pos = -20;
      var id = setInterval(frame, .1);

      function frame() {
        const rock = document.getElementsByClassName('rock')[0];
        if (pos >= 655) {
          rock.style.visibility = 'hidden';
          window.enemyHearts += 1
          if (window.enemyHearts === 15) {
            const monster2 = document.getElementsByClassName('monster2')[0]
            monster2.classList.toggle("dying")
            clearInterval(window.id)
            const win = document.getElementsByClassName('Won')[0]
            win.style.visibility = 'visible'
          }
          clearInterval(id);
          return
        } else {
          rock.style.visibility = 'visible';

          pos+=2;
          rock.style.bottom = 100 + 'px';
          rock.style.left = pos + 'px';
        }
      }
    }
    hisMove() {
      var num = 6

      var rock2 = document.getElementById("rock2");
      var pos = 200;
      var id = setInterval(frame, .1);

      function frame() {
        if (window.hearts === 7) {
          const monster = document.getElementsByClassName('monster')[0]
          const App = document.getElementsByClassName('App')[0]
          monster.classList.toggle("dying")
          const over = document.getElementsByClassName('Over')[0]
          over.style.visibility = 'visible'
          // setTimeout(App.style.visibility = 'hidden', 10000)
          // setTimeout(App.style.visibility = 'hidden', 10000)
          clearInterval(window.id);
          clearInterval(id)

          // App.style.visibility = 'hidden'
          // const rock2 = document.getElementsByClassName('rock2')[0]
          // console.log(rock2)
          // rock2.classList.toggle("gameOver")
        } else {
          const rock2 = document.getElementsByClassName('rock2')[0];
          if (pos >= 920) {
            rock2.style.visibility = 'hidden';
            const heart = document.getElementsByClassName('full-heart' + window.hearts)[0]
            console.log(heart)
            if (window.isFull) {
              heart.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAYAAACJIC3tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MjExOTM4NDUxMUYxMUU5OEY0NzhGOUZBMTJEQTk1QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MjExOTM4NTUxMUYxMUU5OEY0NzhGOUZBMTJEQTk1QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyMTE5MzgyNTExRjExRTk4RjQ3OEY5RkExMkRBOTVBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyMTE5MzgzNTExRjExRTk4RjQ3OEY5RkExMkRBOTVBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RoAwdQAAEptJREFUeNrsnQe0FdUVhve9gCB2UcQelWoXK9iwL40dFLGX2MUeLFGjUYlKrFgTVDSJXWOJFY3Ye8FubLEmig0VFRBu9s/ZD5+UKffOzD0z839r7bWUmfvefefMP2efffbZp1Kr1YQQkg4VCowQCowQCowQQoERQoERQoERQigwQigwQigwQggFRggFRggFRgihwAihwAihwAghFBghFBghFBgFRggFRggFRgihwAihwAihwAghFBghFBghFBghhAIjhAIjhAIjhFBghFBghFBghBAKjBAKjBAKjAIjhAIjhAIjhFBghFBghFBghBAKjBAKjBAKjBBCgRFSPIH9MOR4tigpLLOfNTT2Z9qWoF2qaj3Veql1U+tu1lmtk9rcrdphnNpPap+rfaL2odr7ai+pvaD2rhqH/OgspLaItXM7tTnt37/F+1jtO7Uvra0nFLEBiiqw5dU2V9tAra/aPBE/13IfHogeM7n+jdpDag+YvUINTWuvddVWbGVLqLWP+Hm8tP6r9pq16TNqT9oLjQLzhGXUdlcbOAtxJAFGu63MwDtqN6pdo/ZyiQQFr2A9a4cNTVDVRqYqNtLBNm717/9RG6V2k73QJnMOln1Hb6l2mI1WlSa25fNqF6v9rajujrKGvcT6q3XJ+Hd/qnaDvcyezMscrJrTjsb33kntVbXb7C1aafJ36q02wuZtp6p1LIioOqjtqfa02lNqBzdBXC3zucFqT6g9Z0Jvm4cHNW/0Uxujdq0FL3xjQbUT1D5S+4PabDkW1qE2D7pSbXWPvhteZlepvWnir1JgjdPF5jsPWhDDd+ZTO9Ee0P1y5h3sr/a22vlqC3v8XZc28T833dyNAovJruIiTANyOBIsqnaZuOhjZ8+/61rmCl5q3ztpsAzylbgwfZKsbMGQq82D8Abffdg5rbN3KcBcZj1zac5S+6Nn320OtWE2cjXy0v1Y7UUbUd5Q+0DcOuJnahOnu7eN2vziIodLiVunXEmtj7gQfz3sprap2t5qd1FgwXRVu1VtOSkO86ohFIW1uf4zeeiaAeZWiHx2r+OzP6rdZ6PHPeZWRgUh97FmY6yvW1jChLKtuX7tY/xcBEP+qXau2jHiEgfoIk7HOuaqFElcrcHSArJD9mnid0DUdYja43WI61G1vexh3kbtwpjiCgMj3whrp5bo4ZiYf9uRavfbKEmBtWJbeyPOJ8Wmhz1EzUjghEuIgNGZMbyYSWrXqa0mLmtjpLjMlrQZZwJe2Uaz0TE+u764sP4yFJgDQQwsJnaQ8nC6PehZgajgI+aiRqFmYlxWbZDNr5oFsjmQULCZzfGi0N3+3l5lF9jW4ta22kn5gKs2PIPf091cwlUi3v+MzRd3TNgFbJT7LCBynLiE4SgvFURxVyirwNY1cbWV8nKIuYxpgRHoYbVfRbj3e7XDxYXtn/S0vRAgOsNcxyjfEeH7u7J2F30QGKKFN0txUosaAUGPS1IS12gLGISBbPZVxS0yT8lBm71jL+jzIty7mLho53xlERjWuW4RzxYHm8wBahcl/AK7N2IbYwRdM8b8xhcQij9CXGRzUoT2uCmrqUizBXZxM/ziHHCQ2jkJ/ByI6m57cwcx2R7Qfc09zCsjxYX2w/4GJIcPLbrAdjMjMwdzoEYyPmazN3XXCPOtARFdrDyAAMgWEUR2lPy8r69wAlvEfHwya1oWgut9014gLj0rCOQEYuf3rQVru4fspTExpH1HpD09aZbALpHiLyQn1T+/rcNd3ENcXmHYyIU3/cMFbbu7I7RB54Tnu14I7Nfi1rxINLB0gS35bSL2V9cIDw3mXMiYebTgbYc52dkh9+xgo3ghBIakzeHUTGyQvXChtV+7gH6DCLERcY6Qn4fcvlElaTssRoetk50v8RKKvRUYQtBLUS919RM2bSLqOpe4VLKZLcoje7xvyM8aJumstfkKwvY7S3DGRzd7NnMtMKx5sTJpY32FlxM2QmLby+zTXccu79+H/IwH7Y1eNt5TOzbknhPs5ZVbge0r/u/o9R1kh/9J3Fb5BVr9e8VGt6D6H6g7OEhyWPosITBqPxtwHe15YF4Fho4/gvpIgFptU6lUUOtjyVb/Chdo3aBPiSsO82mJW26KzT2D6hQePhPPIBcC215tcaojASoVqXTqtJh07Njb/gU5nGFrZVeIW4AtOwh23BJwHVn3A/MosAPZt0mKTJatdOm8p/0fJudBNSxQPu4oNto0TpbgJOaD8yYw7EFaj/2aoJf4xZci477tYqPXkJDbsVA9jq02DewWuCPgOnZs986TwHZhnyY9m9AX8PjxSPFBUnDQFhTs5L2eDTYDYXmXu+ZJYDuzP1MYxSZMaBmdZnmLuMIvPG5pRpCrGLQlZ1BS2khbYNiK0pX9mYbCpuomaNkDCbzPsqFm+fK5POA63O8+eRDYNuzLpj1Ap7AZAkGFrKBgx1Z5ENjm7MemgNFrDJshEERXg3IUt/BdYEg4XZ392BTOZBNEIiiaiNSzBXwWGKrztmMfZs5oced4kXDuDLiG9LN+PgusD/uvKQxjE0QGa2Jj03yG0xTYauy/zMGJn3ezGSKDYNBjAddX9Vlgq7L/Mucs4bpXXJ4IuNZbGjyaOC2BdZLmnONbZnA29HVshti8EHAN+8MW91FgPdlvmYMqUhPZDLEZk+aznJbAurPfMuVrcSeBkvh8Zu03K7r5KLAl2W+Zgt2637EZ6uatgGteuojcXJkWlRnm3Mj6ZaWuxvgg4NoSPgpsUfZZZlwtrt4GqZ+PA64t5KPA5mefZTKKIVn1bDZIw3ya1rOclsBYFjsbkSGX7k02RsN8FXCtEwVWRnFVpwrsDDZGIgSVVJjbR4G1ZZ+lBDZaTt1sOVVgT7JBEuHbgGttfBTYXOwzkiOCNl7O6aPAquyzVOdeDWbIkaygEPIqshpzejPiJx8F9i37JU2HZgrbIFmCji4a76PAfmKfpe0m0kdMkKBQ/I8+Cmws+ywFWnuFdBGTZOGAa5/7KLBP2GdpjFzSKkxPgSVIUHL6xz4KjLlxqYxgNece0kVMmh4B197zUWBM30l7DkYXMSmggRUDrr/uo8BeZ79RXDmhlwQnRrzmo8BYVTZtkZGk6BdwDeshz/kosH+rfcG+S0lcFFiSbBEyen3po8DgwzzOvkuhVaeJi25iAsyjtlHA9YeTmOClBc8ETkVhwihicuCgvaAsjjt8Ftjt7L80XUU2QQLsH3AN6X4P+iwwFBJ5nn2Ywhxs2mIzaYC1xR0QOSv+Ia6gkLcCAyPZjymJjENYo/w+5PrlSfyStAV2jbDabApTsRojiY2BwMYmAdexjvtIHgSGUP217M+UREbqnb2G1TI5RxIK02ax4ZInflBYPoHARtDRWkhUvzqpX5aFwLBYdyv7lQLzgCUjjF4nJzmtyapkwAlqk9m/FFoTQXWoq8QtLs+KN9SuTPKXZiWw15L+4qWdPkwN0bNkQB2crrZ+yD2DJeHd+FkWvTlWmJ/Y+PT8l/9BorGL2pCQe/6udn/SvzhLgUFcR7OvE3AN6R7GAaPW5SFvJWwQPiyNX5512baRarexz+sdwSqcf8VjTXEpe0H5hmjMPdPyrppRF3F/YUmBxkYwEoWV1O6R8NryQyXFxPRmCAxHxQwUlnYj6dFH7V9q84bcd6+Ep0zlTmAAaSjH8DkgKbCluGBF2LleL9uLfnIRBQaQjnIJnweSIPuJy4LvGHLfR+J2Mo9L+ws1uzb9YOG+MdI47exlfZmEH52Foribmcik6ALD8DzI/GVC6qGL2gNqB0S4F5HCTaXBSlF5Ehj4Xm1bSWh7ACkVEMsLautGuPd/ahuovZjlF/Tl+CJsz95cEtiiTUrjEiJp924bwcJ4R9yC88tZf1GfzgcbbxPPG/j8kACWV3tKXBQ6yvP7qNpa4koJSpkFBnBUzE5qZ/I5ItOB4MVxas+qrRLxM8gv3FgaPCGlSAIDSFU41iat3OJCADZI4sB3ZF20j3A/thucrLabJFC4pmgCa+Eym5fxrLHygjSnC8wlXDXiZ8bac3OKeLCT3vczmkep9ba3FykXO4grPjM4xnP6iLmP3hS9zcMh6FgQXE/tXGFtjzKwtNpd4oJdi0T8zGRzHzeUBg/MK6PAwCS1I9W2U/uMz2AhmV1c4u0r5uJF5S1x62C/Ew8TyKs56wTsJUM1VhbRKRZIun3DAhOzR/wMAhnD1VZWe8LXP6yaw874zEayPSWDZE2SKpgvIbngOrUlYnzuHXMHDxWXCSQUWPKgQhAWHe/gc5o7FlC7SNyaVr8Yn5tocy14MQ/l4Q+t5ryjEADZWm2AuIKRxG+wWHyIzZsOivn8PSYuVI+51g95+YOrBem4m8WdtXuh+ebEP5BRMcbmTfPG+ByyMLDPC5HkV/L2R1cL1IHfiFszWUO4buYTXdVuEbemuWyMzyH0frFad7W/5PXFWS1gh+LQ6r7igiAsrtM85lQ7TVwG+3YxP4vjh1dXO1jtqzw3QrWgnYsFaQRBeqqdLTxCKWtasjAwX+oQ43Mfqu2sto64fV65p1rwjobbiGKny4mr1UDSpYe5gsjCWCzG5xC0ON1cyGulQBk71ZJ0/Ntq24vb0focdZA4s6mdZEGMjWN+9gbzNHBAyHdFa5hqyR6E0ebbww35gLpIhL7mziF7vX2Mz71gL7yBRe6LagkfiJq5IYV9a2YE5lbDxGWwx4kOIuy+r7g9XqOL3kjVEj8gLX4/wsBXCNfP4rCKudpHx3iG0L6XqnVTG1GW9q7yWZkayt/H3qgPszkCaWtzradijloQI+piHKj2dZkajAL75Zygn9fzMxz8UGna2WBLiSsgg7lWu4ifgZhaFv+fKeNDRYHlcX6Wvcj6qz0v7jigqKDgTOnT1yiw4PmZf+sy2YqrgwnkJomeP4h9XRup7Squ2GepocCCacksWFvtJS/G1+z0hWAENjIeHCOIgawZbIBkKXQKLBZ40LBV4lhp6lYJzMGqWYxiKAD7tIkl6osIC8yIKk7g40KB1QPqPaAgKjZ53t+0bwFxpSewis0974jhEl6jtqKw7DkFlhDvijt0ABsGx2fuIqYnsrnE7as7NeJzgSx3VGHeRUoWeqfAsnnUcR4VzgF+NFsXMZXRC6XSsLYVdVvJAzZqXc9HgQJLk5ZTO1AzfVJmLmI10W7rY3PMXhHuxSbIk2wE/4jdT4FlAaJnOEoHW9rfy9kcDIm2iPh1jnBvS0nqU4VpZRRYE0CZAuTo3ZiuwBL7SRh1scbXIcbfNordTIE1E9Rp3FHt8LRcxkrjCmsj7mCNoRHlisTcfuJZSWoKrNycL64wZuKl5GrmJdapM2yMRJHP/SLcixcESqxhawnXtigw70B0cTVJsqxzrUVXdSkMYXgcqjAgwr1f2XzrInYjBeYz2AqDXbt/TX7+FSs9EpV0EVrfKMK9iIz2tfsJBeY9cK92F5dmlWD0LfIIhgjhaHGlEsLAfjhkzL/BbqPA8gbSrJD58GNDE7B4dBGXwrRchHuRxbGZ2hfsKgosryCEj0XaLxtSWCWS2hY2cUXZeYxy1gMbEj+hwDwBRWJwYNyH8b3CSiudBbqIi5i4ekb4qSeKOwaIB85TYIXhNRPZW3W5iMHTrwXV7hFXBDTspyEMfxq7gwIrIu+LS68ak+DPRCgeW01WCLkPo9UewjA8BVZwsKUeC9LPR+utStAQhkVkHK0bVjcD+9oGSVJLB4QC8xwEPDaJJDJk0aOyVG2GAAfSn240sQYxycR1I5udAiujyF4MnYZNmGnWEpYAto7gFkJcN7G5KbCyigwh/DeDFVaT2sRfnMaEYp5HhfxsLHDvJW6ti1BgpQV7rlA8Jrjw6ZQpLW4iXMLhYYOeiZBzLgqMiNspvJGJLXAkU+60+VcQx6v9mc1KgZGfedvmVN+H3Be2WRJ1Q85gc1JgZEZQhGZvqb+qMEL2g9mMFBiZ9dwJ4fQz6/gsioainBrTnygwEgKKzNwbcw7XP4J7SSgwYqMQXL0oNTEQvx8oLKlGgZHIbiIEhmNXjxCX5hQEasM/zmajwEg8kOL0rNqVAffcLuFrYoQCI9ONYFNsFMNmSJwlPbMtLkga/g2biwIj9YkMriGSEJFONUxmjA5iX9dYNhUFRupjio1g34g76/j2VtdQio05hhQYadBNxDwMxyWhKM154s6Pxr8PYRP5S1s2Qa5ENtFGMdQuRPIu6h2+yuahwEjjTDbDXAw18HFIe082CwVG0uFj4YEM3lOp1WpsBUIoMEIoMEIIBUYIBUYIBUYIocAIocAIocAIIRQYIRQYIRQYIYQCI4QCI4QCI4RQYIRQYIRQYIQQCowQCowQQoERQoERQoERQigwQprB/wUYAARjPSCqiqWoAAAAAElFTkSuQmCC"
            } else {
              heart.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADYCAYAAACJIC3tAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NDQxNTRBNzUxMDQxMUU5OEY0NzhGOUZBMTJEQTk1QSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NDQxNTRBODUxMDQxMUU5OEY0NzhGOUZBMTJEQTk1QSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3RENGNDJFNTBGQTExRTk4RjQ3OEY5RkExMkRBOTVBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0NDE1NEE2NTEwNDExRTk4RjQ3OEY5RkExMkRBOTVBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Uezh2AAAFSRJREFUeNrsnQnY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'
            }
            
            if (window.isFull === true) { 
              window.isFull = false } else {
                window.isFull = true
                window.hearts += 1
              }
            clearInterval(id);
          } else {
            rock2.style.visibility = 'visible';
            pos+=2;
            rock2.style.top = 40 + 'px';
            rock2.style.right = pos + 'px';
          }
        }
      }
    }
    componentDidMount() {
      // debugger

      var x = document.getElementsByClassName("audio")[0];
      window.id = setInterval(this.hisMove, 8000);
      // this.hisMove()
      function playAudio() {
        x.play();
      }
      playAudio()
      // function pauseAudio() {
      //   x.pause();
      // }
      var today = new Date();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.setState({time})
      // const props = this.props.props
      // props ? this.setState({props}) : this.setState({props: ""})
      // this.setState({ prompt: this.props.props, length: this.props.props.length })
      
    }
    handleKeyDown(e) {
      e.preventDefault()
      console.log(e.key)
      // debugger
      let prompt = this.state.prompt;
      let new_state = this.state.new_state
      let length = this.props.props.length || 0
      console.log(new_state);
      if(e.key === 'Backspace') {
          new_state = new_state.slice(0, -1);
          let new_index = this.state.index - 1 < 0 ? 0 : this.state.index - 1
          this.setState({ new_state, prompt })
          // console.log(this.state)
          this.setState({ index: new_index })
        } else if(e.key === 'Tab') {
          if (this.props.props[this.state.index] === " " && this.props.props[this.state.index + 1] === " ") {
            new_state = new_state.concat("  ")
            this.setState({ new_state, prompt })
            // console.log(this.state)
          this.setState({ highlight: "highlight", index: this.state.index+2, length })
            } else {
              this.setState({ highlight: "error", errors: this.state.errors+1 })

            }
      } else if(e.key === 'Enter') {
        if (this.props.props[this.state.index].charCodeAt() === 10) {
            const rock = document.getElementsByClassName('rock')[0]
            this.myMove()
            const text = document.getElementsByClassName('text')[0]
            text.scrollBy({
              top: 49,
              behavior: 'smooth'
            })
            new_state = new_state.concat("↵")
            this.setState({ new_state, prompt })
            // console.log(this.state)
          this.setState({ highlight: "highlight", index: this.state.index+1, length })
            }
      } else if(e.key.length > 1 ) {
      } else {
            if (this.props.props[this.state.index] === e.key) {
            new_state = new_state.concat(e.key)
            this.setState({ new_state, prompt })
            // console.log(this.state)
          this.setState({ highlight: "highlight", index: this.state.index+1, length })
            } else {
              this.setState({ highlight: "error", errors: this.state.errors+1 })
            }
          console.log(this.state)
        }
      // debugger
      console.log(this.state)
      const highlighter = document.getElementsByClassName('highlighter')[0]
      console.log(highlighter.innerHTML);
      // var innerHTML = highlighter.innerHTML;
      var index = this.state.index;
      const len = 1 
      console.log(index)
        var innerHTML = this.props.props.substring(0, index) + `<span class=${this.state.highlight}>`+ this.props.props.substring(index, index + len) + "</span>" + this.props.props.substring(index + len);
        highlighter.innerHTML = innerHTML;
        console.log(innerHTML);
        // debugger
      
    }
    render() {
      
      var error = this.state.highlight ? null : "error"
      var errors = this.state.errors
      // debugger 
      window.addEventListener("keydown", this.handleKeyDown);
      // window.addEventListener('keydown', this.handleKeyDown)
      const prompt = (this.props.props)
      var html;
      var markdown
      if (this.props.props) {
        var code = this.props.props
        html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
        markdown = {__html: html}
      } else markdown = {__html: ''}

      const new_state = (this.state.new_state)
      const char_count = new_state.length
      var word_count = this.state.new_state.split(' ')
      word_count = word_count.filter(el => el !== "").length
      var elapsed_minutes = (300 - window.time) / 60
      var wpm = Math.round(word_count / (elapsed_minutes))
      wpm = (isNaN(wpm) ? 0 : wpm)
      return (
        <>
          {/* <div className="speed">Speed Code </div> */}
                <div  className="text">
              <div className="highlighter">
                {prompt}
              </div>
              {/* <div className="timer-box"> */}
                {/* {new_state} */}
                {/* {word_count} */}
                {/* {char_count} */}
                {/* < Timer /> */}
                {/* {/* <div className="errors"> */}
                  {/* Errors: { errors } <br></br>
                  WPM: { wpm } */} 
                  {/* <pre><code dangerouslySetInnerHTML={markdown}></code></pre> */}
                {/* </div> */}
              {/* </div> */}
              {/* <span className="prompt">{prompt}</span> */}
              {/* <span className="prompt">{new_state}</span> */}
            </div>
            <div className="feedback">
            {/* <img src={monster} className="monster" alt="monster" /> */}
              
            </div>
        </>
    )
  }
}

export default Speed
