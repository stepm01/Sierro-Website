export const getServerSideProps = async () => {
  return {
    props:{
      greeting:'Welcome to Mamble'
    }
  }
}

export default function HomePage({greeting}) {
  return (
    <h1 data-testid={'greeting'}>{greeting}</h1>
  )
}
