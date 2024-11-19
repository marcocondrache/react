
## Input

```javascript
export function Component({arr}) {
  const x = useMemo(() => {
    let y = false;
    const newArr = arr.map(() => {
      y = true;
      return true;
    });
    if (newArr) return y;
  }, [arr]);
  return <div />;
}


```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";

export function Component({arr}) {
  const $ = _c(3);
  let t0;
  if ($[0] !== arr) {
    let y = false;
    const newArr = arr.map(() => {
      y = true;
      return true;
    });
    let t1;
    if (newArr) {
      t1 = y;
    }
    t0 = t1;
    $[0] = arr;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  return <div />;
}


```
