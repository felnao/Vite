import { BigInt } from "@graphprotocol/graph-ts"
import { ViteToken, Approval, Transfer } from "../generated/ViteToken/ViteToken"
import { TransferEntity, ApprovalEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {

  let id = event.params.owner
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())
  
  let ApprovalEntity = new ApprovalEntity(id)


ApprovalEntity.owner = event.params.owner
ApprovalEntity.spender = event.params.spender
ApprovalEntity.value = event.params.value


ApprovalEntity.save()

 
}

export function handleTransfer(event: Transfer): void {

  let id = event.params.to
            .toHexString()
            .concat('-')
            .concat(event.logIndex.toString())
  
  let TransferEntity = new TransferEntity(id)

  
TransferEntity.from = event.params.from
TransferEntity.to = event.params.to
TransferEntity.value = event.params.value


TransferEntity.save()


}



