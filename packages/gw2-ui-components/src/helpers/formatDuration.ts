export default (value: number) => {
  let seconds = value

  const weeks = Math.floor(seconds / 604800)
  seconds %= 604800

  const days = Math.floor(seconds / 86400)
  seconds %= 86400

  const hours = Math.floor(seconds / 3600)
  seconds %= 3600

  const minutes = Math.floor(seconds / 60)
  seconds %= 60

  return [
    weeks && `${weeks} w`,
    days && `${days} d`,
    hours && `${hours} h`,
    minutes && `${minutes} m`,
    seconds && `${seconds}${minutes ? ' s' : 's'}`,
  ]
    .filter((entry) => !!entry)
    .join(', ')
}
