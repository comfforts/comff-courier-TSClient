import { registerCourier } from '../register-courier'
import { getCourier } from '../get-courier'
import { deleteCourier } from '../delete-courier'

describe('courier client', () => {
  test('courierCRUD', async () => {
    const requestedBy = 'test-courier-crud@test.com'

    let resp = await registerCourier({
      org: 'test-courier',
      name: 'test-courier',
      postalCode: '89104',
      country: 'US',
      street: '1455 S Lamb Blvd',
      city: 'Las Vegas',
      state: 'NV',
      latitude: 0,
      longitude: 0,
      height: 36,
      width: 36,
      depth: 36,
      requestedBy
    })
    expect(resp.error).toEqual(undefined)
    const crId = resp.courier?.id
    expect(crId).not.toEqual('')
    expect(crId).not.toEqual(undefined)

    if (crId !== undefined && crId !== '') {
      resp = await getCourier(crId)
      expect(resp.error).toEqual(undefined)
      expect(crId).toEqual(resp.courier?.id)

      const delResp = await deleteCourier(crId)
      expect(delResp.error).toEqual(undefined)
      expect(delResp.ok).toEqual(true)
    }
  })
})
