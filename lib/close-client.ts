import courierClient from './client'

export const closeClient = (): Error | undefined => {
  try {
    courierClient.close()
  } catch (err) {
    console.error('error closing courier client')
    return err as Error
  }
}
