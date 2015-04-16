(function () {
    function words(str) {
        var obj = {}, words = str.split(" ");
        for (var i = 0; i < words.length; ++i) obj[words[i]] = true;
        return obj;
    }

    CodeMirror.defineMIME("text/x-ooc", {
        name: "clike",
        keywords: words(
            /* ooc */
            "import include use " +
            "class cover extends from func implements interface operator extend enum get set " +
            "abstract static final extern const proto unmangled inline " +
            "private protected public internal " +
            "new this as super " +
            "break return continue in " +
            "case " +
            "if else match " +
            "while for " +
            "try catch " +

            /* built-in sdk types */
            "assert print println printf " +

            "Int Int8 Int16 Int32 Int64 Int80 Int128 " +
            "UInt UInt8 UInt16 UInt32 UInt64 UInt80 UInt128 " +
            "Octet Short UShort Long ULong LLong ULLong " +
            "Float Double LDouble Float32 Float64 Float128 " +
            "Char UChar SChar WChar String CString " +
            "Void Pointer Bool SizeT This Class Object Func "
        ),
        blockKeywords: words("catch class cover else for if match try while func"),
        atoms: words("true false null"),
        hooks: {
            // highlight operators beginning with :
            ":": function (stream) {
                return stream.eatWhile(/[+\-*&%=<>!?|\/]/) ? "operator" : null;
            }
        }
    });
})(); 