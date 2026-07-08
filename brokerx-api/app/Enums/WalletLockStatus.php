<?php

namespace App\Enums;

enum WalletLockStatus: string
{
    case ACTIVE = 'ACTIVE';

    case RELEASED = 'RELEASED';

    case CAPTURED = 'CAPTURED';

    case CANCELLED = 'CANCELLED';

    case EXPIRED = 'EXPIRED';

    case FAILED = 'FAILED';

    case REVERSED = 'REVERSED';
}