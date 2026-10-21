Place the SmartCo logo — color version on white, white version on primary / secondary / overlaid dark photos.
```jsx
<Logo height={40} basePath="../../" />
<Logo variant="white" basePath="../../" />
```
- Padding around the artwork equals its height (clear space ≈ logomark height). Height clamped so width ≥ 120px.
- `basePath` points at the folder containing `assets/`; or pass `src` directly.