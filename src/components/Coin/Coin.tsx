import React, { CSSProperties, ReactElement } from 'react';
import css from './Coin.module.css';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

const goldImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAACFlBMVEXAu6XBvqzOyLLQy7Tb1r/x8Oby8Obz8eX19Oz29Oj39u739u/59+z9/fb9/ff+/vj///9SQgRqXCZYTBuIfVR6b0NaTRpxZjpvYi51a0BrYDJkWCd6b0SBdkpfUh5gVCBQRBFcTxpmWiZTRhBSRxJcThZVSBVxZDNnWSVtYCxaTRdbTx1VSBFjVR9SRAxVRw9WRxNOQAlTRA1TRQ1ZSw5WRw1RQgZXSA1TQwldThRgURlaSxFlVyFRQgRSQgVeUBZqXShtYCtuWwxwXAxyWAZzWAhzYRh1WwR3aBR5YAh5aRh8Ygt+aRCAahCCZRCDaRiDbhOFaBKFbBqFbB2HcRKJdhuKdyWMcyCNdRmNeCaObg2PeBSRehWSehySfCOSfy2ThEaUdBOUfhiVgjGXgymagReagjWbgzGdgRSeiCGeijmejDyfiz+gghKhhBuhijqikUukihqkk0umhiOmjBqmlEqohRmolkaskhywoGCxlh2xpGy0kCC0oFu1kRi1mB+3nUS5nR+6lR66niC7nyC8nDG8oCK8pVS/pCy/pS6/pzzBnBvBrE3DqjrDsV7EsXPHuX7ItnXIt3zJrD/Js1DMsTLMuHLMvHrNqSDNuGnNuV7Ptj3Pw5DQsTHRt1zSvXPSxIPUulXUwGbUwnLUyJPWvl3WxXfZvDrZvynZxELawWraxXfay4Xczo3gvTPkxjfnyjjn0EYVvr+2AAAAPXRSTlMAAAAAAAAAAAAAAAAAAAAAAAMHEBMWIiMzN11lbnJ3d32Yr7S7vsHCxsfL0dbe4+nr8fX1+Pr8/P39/f7+hZB6/QAAAOBJREFUCB0FwctOg0AABdA7D4ZXWsCEJkXTsND4A5qu/QP3bv1Yu3ahG9MwqClQUaECA0PGc0gIALB8IYb+b544ALBwfXlmHfPynZIQWF7cXbG+IdPTXnIgSh+iUuquMje6ZU6QPi4+5qE1pmabA7WTe0cuEo/pwWS+y5fbVen5rRqOiia94sFGB7po2vJk4vSlob5QP8KbWegGfM6/ue5i49j1qIh1vSs6FlGxNuXXb3Ub77LDyKtXPqt6Ol9lb5/FSTAo0/oe5PNeSkUZscc4toVSbe4qwiwSAgAAAADwDxrAZ/fRn0ixAAAAAElFTkSuQmCC';

const silverImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAABs1BMVEXKysrZ2dnd3d3g4ODq6ur+/v7///9IR0diYWFaWlqDgoJ8e3tWVVV4d3hoZ2d0dHRsbGxsbGx5eXl7e3tfX19kZGROTU1eXl5oZ2dRUVFNTExfXl5TUlJsa2tjYmJtbGxWVVVXV1dSUVFeXV1PT09TUlJSUlJIR0dNTExTUlJPTk5IR0dPT09LSkpXVlZYV1dSUVFeXV1IR0dJSEhVVFRjYmJlZWVoaGdpaWlqaWltbGxubm52dnZ4eHh5eXl7enp8fHt8fHyAgH+BgYGDg4OFhISJiYmLi4uNjYyPj4+Qj4+QkI+QkJCSkZGSkpKTk5OUk5Oampmbm5udnZ2enp6fn5+gn5+goJ+hoaGioaGjo6OkpKSlpaSmpqanp6anp6eoqKeoqKipqaivrq6vr66vr6+ysrK0tLS1tbS1tbW3t7e4uLi7u7u9vby+vr6/v77AwL/AwMDBwcHCwsHCwsLDw8PExMPExMTGxsbHx8bHx8fLy8vNzczNzc3Pz87Pz8/Q0NDR0dDS0tLU1NPV1dTV1dXW1tbX19bX19fZ2djZ2dnd3dzd3d3f397f39/j4+Pl5eXNhw8uAAAAMnRSTlMAAAAAAAAAAwcQExYiIzM3XWVucnd3fZivtLu+wcLGx8vR1t7j6evx9fj6/Pz9/f3+/gaBBrQAAADaSURBVHgBY2ADA24xGSUpQTY2VjCfU9LQMzLO10qNiw3EF9FPbu5orKwqdVJlB/LFzep669PiI9zcC+wlGNhETVt6qxuyQ6KD7BJTtBh49Sq7y1v7S6Kifayd840ZpMM6G+p7WnNCXWxtkjJ0GDTL29uaijJDHS2sQwo85BlMairy6itSo/xcfAJzjfgYDIrbanu6crLc3f0LHGTZGFS8yib0VaTHuhfk2ytzsDLwawcUZocH5xcEmsuxg9wrYOSakBHjbakhxMIM4jPyKGroqisIM7AxgfmoAABFZDceH74clQAAAABJRU5ErkJggg==';

const copperImg =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAACK1BMVEWtopWtpJq0qJu3qp7Btaji2tHi29Pj3NTl3dXo4Njp49zs5t/z7ebz7ufz7uj///9CJgxaQSpHMR16ZlRoUz9JMxxhTjtgSDFlU0BaRjJSPCdrVkNxXElNNiBONyE/KRRLMhxWPihCKxRDLRdJMBhFLhhiSzVVPSddRS9JMRpMNSBFLRZSOSJBKRFFKxRGLhc/JxBDKhJJLhRGLBNBJw1HLBNDKA9NMhpRNx9LMBdXPyhBJgxCJg1PNBxQLg9RLxFZLAlZLgtZNBJaLQtaNRNbOx5dMQ1dOhhdRS5eOhZfRzFgMxBhOhZjOhNkPRllPBVmNBJmOhNnORlnPRZpPh1rPx5rRBxsOhdtPxlwORJwSCVxRCJxSyhyRB12Pxh2RRh4US15UCl6USl7RRV8SBl8TiJ8WDZ9RBV9Shp9TSB/RxZ/SRiASRaAZUqBSh2BVTWCRRWCVTODSxuDTxyEUyOEXTqFSheGYD6IXjyIYkOJTSGKUiqOUxuObk+QVyKQbEqQbU6RcFKSUyOTUR2TWiaaWiKbWiibZTOcbEacfmKeeVufZTegWiOghm6keFaqdEOqelCrYiWtdEWvdDqwbjCxkHaycTmzhl20fEO0knW2l363hFy3jWu3knO5hli6dzK6lHC6mXu7fEG8fj28h1C8kmu8noO8oIa9jGC9lXTAdjjBhkbBkWrBqJPDezjDmHTHlmrIgT3IiUXIr5nKl2PLp4jMq47NpH/PrZBy/iAhAAAAO3RSTlMAAAAAAAAAAAAAAAAAAAAAAwcQExYiIzM3XWVucnd3fZivtLu+wcLGx8vR1t7j6evx9fj6/Pz9/f3+/kfuU3oAAADhSURBVAgdBcG7TsMwGAbQL/afxlXUOIGCKNChEgusSDwEOzMDGy/KKyAkVGhuTajSSrk4dm6cY0kAgO3OZq2qh5EAgPtXjz5Lt3nUEQDv5mVllPY3H9OOgODhbf6XKRWbp7HkQt6/i7DX1dAW023GnNUr+5aXNJmu3U1z8p79xOEHo5PGvq418+60y5JTmRT1ch2X5Mqok1RNzoJ4fDxSfzqvpGhEx2jxlTc8MOtgiOtDs6HPbN9zpkYniosz9vObpg3nQ2f2RpTJNg9DzZll98sLxza6jISxiCwJAAAAAMA/7KBtyaLzlLgAAAAASUVORK5CYII=';

export interface CoinProps {
  value: number;
  className?: string;
  style?: CSSProperties;
}

const Coin = ({ value, className, style }: CoinProps): ReactElement => {
  let copper = value;

  const gold = Math.floor(copper / 10000);
  copper %= 10000;

  const silver = Math.floor(copper / 100);
  copper %= 100;

  return (
    <div style={style} className={clsx(className, css.root)}>
      {gold > 0 && (
        <>
          <span className={css.gold}>
            {(gold && gold.toLocaleString()) || 0}
          </span>
          <Icon src={goldImg} gutterLeft gutterRight />
        </>
      )}

      {(gold > 0 || silver > 0) && (
        <>
          <span className={css.silver}>
            {(silver && silver.toLocaleString()) || 0}
          </span>
          <Icon src={silverImg} gutterLeft gutterRight />
        </>
      )}

      <>
        <span className={css.copper}>
          {(copper && copper.toLocaleString()) || 0}
        </span>
        <Icon src={copperImg} gutterLeft />
      </>
    </div>
  );
};

export default Coin;
