import Counter from '../components/Counter'

async function getInitialCounterValue() {
  await sleep(2500)
  return 3
}

export default async function Home() {
  const value = await getInitialCounterValue()

  return (
    <div>
      HOME PAGE
      <Counter initialValue={value} />
    </div>
  )
}

function sleep(ms = 2000) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
