import { z } from "zod";
const foo = "bar";
//     ^?

// ..
const parsed = z.string().parse("foo");
//      ^?
