﻿import { Injectable } from '@angular/core';

@Injectable()
export class AbpSessionService {

    get userId(): number | undefined {
        return abp.session.userId;
    }

    get tenantId(): number | undefined {
        return abp.session.tenantId;
    }

    get impersonatorUserId(): number | undefined {
        return abp.session.impersonatorUserId;
    }

    get impersonatorTenantId(): number | undefined {
        return abp.session.impersonatorTenantId;
    }

    get multiTenancySide(): abp.multiTenancy.sides {
        return abp.session.multiTenancySide;
    }

}