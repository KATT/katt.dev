import { z } from "zod";
const foozzz = "bar";

// ..
// ..
const parsed = z.string().parse("foo");
//     ^?
