import {} from "solid-js";

export default function () {
  let counter = 0;

  return (
    <button
      onclick={() => {
        counter++;
        console.log(counter);
      }}
    >
      foo
    </button>
  );
}
