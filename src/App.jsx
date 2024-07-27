import { useRecoilValue, RecoilRoot ,useRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
export default function App() {
  return (
    <div>
        <Count />
    </div>
  );
}
function Count() {
  return (
    <>
      <RecoilRoot>
      <CountRenderer />
      <Buttons />
      </RecoilRoot>

    </>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <h1>{count}</h1>;
}
function Buttons() {
  const [count, setcount] = useRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setcount(count + 1)}>Increase</button>
      <button onClick={() => setcount(count - 1)}>Decrease</button>
    </>
  );
}
