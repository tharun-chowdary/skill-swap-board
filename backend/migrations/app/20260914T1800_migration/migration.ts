#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/0cfffae63baea78b14498494db054c988ea6ed66842f4ad96b520aeb2061ae2d/contract';
import endContract from '../../snapshots/0cfffae63baea78b14498494db054c988ea6ed66842f4ad96b520aeb2061ae2d/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/1e8412e162dbbe69f4bb3bf8d07f0280ae67eaab15c34dcf201e67468315428d/contract';
import startContract from '../../snapshots/1e8412e162dbbe69f4bb3bf8d07f0280ae67eaab15c34dcf201e67468315428d/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, placeholder } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.dropTable({ schema: 'public', table: 'post' }),
      this.dropColumn({ schema: 'public', table: 'user', column: 'username' }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('bio', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('city', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('latitude', 'float8', { codecRef: { codecId: 'pg/float8@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('longitude', 'float8', { codecRef: { codecId: 'pg/float8@1' } }),
      }),
      this.addColumn({
        schema: 'public',
        table: 'user',
        column: col('password', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.dataTransform(endContract, 'backfill-user-password', {
        check: () => placeholder('backfill-user-password:check'),
        run: () => placeholder('backfill-user-password:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'user', column: 'password' }),
      this.dataTransform(endContract, 'handle-nulls-user-name', {
        check: () => placeholder('handle-nulls-user-name:check'),
        run: () => placeholder('handle-nulls-user-name:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'user', column: 'name' }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
