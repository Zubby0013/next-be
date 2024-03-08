import { Types } from "mongoose";
import { Document, Schema, model } from "mongoose";

interface iSchool {
  started: boolean;

  email: string;
  verify: boolean;
  enrollmentID: string;
  status: string;

  schoolName: string;
  address: string;

  avatar: string;
  avatarID: string;

  plan: string;

  session: Array<{}>;
  staff: Array<{}>;
  lessonNotes: Array<{}>;
  reportCard: Array<{}>;


  schoolTags: Array<{}>;

  subjects: Array<{}>;
  classRooms: Array<{}>;

  payments: Array<{}>;
  announcements: Array<{}>;
  events: Array<{}>;
  students: Array<{}>;
  store: Array<{}>;
  articles: Array<{}>;
  gallaries: Array<{}>;
  complain: Array<{}>;
}

interface iSchoolData extends iSchool, Document { }

const schoolModel = new Schema<iSchoolData>(
  {
    started: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
    },
    avatarID: {
      type: String,
    },

    address: {
      type: String,
    },

    plan: {
      type: String,
      default: "in active",
    },

    schoolName: {
      type: String,
    },
    status: {
      type: String,
    },
    enrollmentID: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    verify: {
      type: Boolean,
      default: false,
    },

    schoolTags: [
      {
        type: {},
      },
    ],

    session: [
      {
        type: Types.ObjectId,
        ref: "academicSessions",
      },
    ],
    reportCard: [
      {
        type: Types.ObjectId,
        ref: "reportCards",
      },
    ],
    events: [
      {
        type: Types.ObjectId,
        ref: "events",
      },
    ],

    announcements: [
      {
        type: Types.ObjectId,
        ref: "announcements",
      },
    ],

    subjects: [
      {
        type: Types.ObjectId,
        ref: "subjects",
      },
    ],

    complain: [
      {
        type: Types.ObjectId,
        ref: "complains",
      },
    ],

    classRooms: [
      {
        type: Types.ObjectId,
        ref: "classes",
      },
    ],

    staff: [
      {
        type: Types.ObjectId,
        ref: "staffs",
      },
    ],

    payments: [
      {
        type: Types.ObjectId,
        ref: "payments",
      },
    ],

    students: [
      {
        type: Types.ObjectId,
        ref: "students",
      },
    ],

    store: [
      {
        type: Types.ObjectId,
        ref: "stores",
      },
    ],

    lessonNotes: [
      {
        type: Types.ObjectId,
        ref: "lessonNotes",
      },
    ],

    articles: [
      {
        type: Types.ObjectId,
        ref: "articles",
      },
    ],

    gallaries: [
      {
        type: Types.ObjectId,
        ref: "gallaries",
      },
    ],
  },
  { timestamps: true }
);

export default model<iSchoolData>("schools", schoolModel);
