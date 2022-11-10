import {Latest, Snapshot} from '../../generated/schema'

const LATEST_ID = 'latest'

export function updateLatest(snapshot: Snapshot): void {
  let latest = getLatest()
  latest.totalReserve = snapshot.totalReserve
  latest.totalSupply = snapshot.totalSupply
  latest.priceShare = snapshot.priceShare
  latest.save()
}

export function getLatest(): Latest {
  let latest = Latest.load(LATEST_ID)
  if (!latest) {
    latest = new Latest(LATEST_ID)
  }
  return latest
}
