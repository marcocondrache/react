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
