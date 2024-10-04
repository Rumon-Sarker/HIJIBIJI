-- AlterTable
CREATE SEQUENCE applyform_jobid_seq;
ALTER TABLE "ApplyForm" ALTER COLUMN "jobId" SET DEFAULT nextval('applyform_jobid_seq');
ALTER SEQUENCE applyform_jobid_seq OWNED BY "ApplyForm"."jobId";
