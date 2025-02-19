```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the effect depends on the count,
    // and setting the count inside the effect triggers the effect again.
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```