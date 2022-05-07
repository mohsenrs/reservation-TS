interface Props {
  name: string
}

const ReservationCard = ({ name }: Props) => {
  return <div className='reservation-card-container'>{name}</div>
}

export default ReservationCard
