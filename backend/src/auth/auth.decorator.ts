import { applyDecorators, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger'
import { Role } from 'src/user/user.dto'
import { JwtAuthGuard } from './auth.jwt.guard'
import { Roles } from './auth.roles.decorator'
import { RolesGuard } from './auth.roles.guard'

export function Auth(...roles: Role[]) {
  return applyDecorators(
    Roles(...roles),
    UseGuards(JwtAuthGuard, RolesGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  )
}
