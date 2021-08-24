export default function isLoading(data, error) {
  let loading
  if (data) {
    loading = false
  } else if (error) {
    loading = false
  } else {
    loading = true
  }
  return loading
}
