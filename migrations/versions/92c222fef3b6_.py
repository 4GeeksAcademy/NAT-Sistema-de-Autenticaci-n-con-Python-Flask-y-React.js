"""empty message

Revision ID: 92c222fef3b6
Revises: 35a4671a0740
Create Date: 2024-01-04 14:30:54.057576

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '92c222fef3b6'
down_revision = '35a4671a0740'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=120), nullable=False))
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=80),
               type_=sa.String(length=120),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('password',
               existing_type=sa.String(length=120),
               type_=sa.VARCHAR(length=80),
               existing_nullable=False)
        batch_op.drop_column('name')

    # ### end Alembic commands ###