import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { OrderStatus } from '../../common/enums/order-status.enum';

export class UpdateOrderStatusDto {
  @ApiProperty({ enum: OrderStatus, description: 'Order status must be one of the allowed values' })
  @IsEnum(OrderStatus, {
    message: 'Status must be one of the following: Pending, Confirmed, Delivered, ON_THE_WAY,CANCELLED,ON_HOLD',
  })
  @IsNotEmpty({ message: 'Order status cannot be empty' })
  status: OrderStatus;
}
