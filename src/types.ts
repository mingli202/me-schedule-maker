import { AuthError, UserCredential } from "firebase/auth";

export type AuthType =
	| {
		info: UserCredential;
		status: "success";
	}
	| {
		info: AuthError;
		status: "error";
	};

export type UserType = {
	email: string;
	uid: string;
	password: string;
	name?: string;
	// schedules?: {};
};

export type Class = {
	count: number;
	program: string;
	course: string;
	code: string;
	codeHeader: string;
	section: string;
	disc: string;
	lecture: {
		prof: string;
		title: string;
		rating: Rating;
	};
	lab: {
		prof: string;
		title: string;
		rating: Rating;
	};
	more: string;
};

export type Rating = {
	prof: string;
	score: number;
	avg: number;
	nRating: number;
	takeAgain: number;
	difficulty: number;
	status: string;
};

export type ViewData = {
	code: string;
	section: string;
	time: Time;
	color: string;
};

export type Time = {
	1?: string | undefined;
	2?: string | undefined;
	3?: string | undefined;
	4?: string | undefined;
	5?: string | undefined;
};
